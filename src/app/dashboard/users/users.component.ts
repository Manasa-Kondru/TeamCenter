import { Component , OnInit} from '@angular/core';
import { AddUserComponent } from '../add-user/add-user.component';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from 'src/app/services/auth.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'team-center-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent  implements OnInit{
allData: any = [];
displayedColumns: string[] = ['name', 'role', 'email','utype'];
dataSource: any;

  constructor(private matdialog: MatDialog, private service: AuthService) { }
    
    ngOnInit(): void {
      this.displayUsers();
    }

async  displayUsers() {
    let token: any = localStorage.getItem("token");
this.allData = await this.getUser(token);
this.dataSource  =  new MatTableDataSource([...this.allData]);
}
 


  addUser() {
    this.matdialog.open(AddUserComponent)
  }

  on_change(event: any) {
    let data: any = [...this.allData];
    data = data.filter((ele: any) => {
    return (ele.name.toLowerCase()).includes(event) || (ele.email.toLowerCase().includes(event))
    });
    this.dataSource = [...data];
  }



  getUser(token:any)
  {
    return new Promise((resolve:any)=>
    {
      this.service.userData(token).subscribe((res: any)=>
        {
          if(res.status==1)
          {
            resolve (res.users);
          }
          else
          resolve([])
        
       })
    })
  }

}







