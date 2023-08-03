import { Component, OnInit, ViewChild } from '@angular/core';
import { AddUserComponent } from '../add-user/add-user.component';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from 'src/app/services/auth.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'team-center-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})

export class UsersComponent implements OnInit {
  allData: any = [];
  displayedColumns: string[] = ['name', 'role', 'email', 'utype'];
  dataSource: any;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  constructor(private matdialog: MatDialog, private service: AuthService) { }

  ngOnInit(): void {
    this.displayUsers();
  }

  async displayUsers() {
    this.allData = await this.getUser();
    this.dataSource = new MatTableDataSource([...this.allData]);
    this.dataSource.paginator = this.paginator;
  }


  getUser() {
    return new Promise((resolve: any) => {
      let token:any=localStorage.getItem('token');
      this.service.userData(token).subscribe((res: any) => {
        if (res.status == 1)
          resolve(res.users);
        else
          resolve([])
      })
    })
  }

  addUser() {
    this.matdialog.open(AddUserComponent, { disableClose: true, enterAnimationDuration: '200ms', exitAnimationDuration: '200ms', width: '500px' })
  }

  on_change(event: any) {
    let data: any = [...this.allData];
    data = data.filter((ele: any) => {
      return (ele.name.toLowerCase()).includes(event) || (ele.email.toLowerCase().includes(event))
    });
    this.dataSource = [...data];
  }

}







