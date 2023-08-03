import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddClientComponent } from '../add-client/add-client.component';
import { AuthService } from 'src/app/services/auth.service';
import { MatTableDataSource } from '@angular/material/table';
import { ProductsgraphComponent } from '../productsgraph/productsgraph.component';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'team-center-projectdata',
  templateUrl: './projectdata.component.html',
  styleUrls: ['./projectdata.component.scss']
})

export class ProjectdataComponent {

  allData: any = [];
  displayedColumns: string[] = ['clientid', 'client_name', 'on_boarding_time', 'no_of_products', ' '];
  dataSource: any;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  constructor(private matdialog: MatDialog, private service: AuthService) { }

  ngOnInit(): void {
    this.displayClients();
  }


  on_change(event: any) {
    let data: any = [...this.allData];
    data = data.filter((ele: any) => {
      return (ele.client_name.toLowerCase()).includes(event)
    });
    this.dataSource = [...data];
  }

  async displayClients() {
    this.allData = await this.getClient();
    this.dataSource = new MatTableDataSource([...this.allData]);
    this.dataSource.paginator = this.paginator;
  }

  getClient() {
    let token= localStorage.getItem('token');
    return new Promise((resolve: any) => {
      this.service.clientData(token).subscribe((res: any) => {
        resolve(res.data);
      })
    })
  }

  addClient() {
    this.matdialog.open(AddClientComponent, { disableClose: true, enterAnimationDuration: '200ms', exitAnimationDuration: '200ms' })
  }

  showProductGraph() {
    this.matdialog.open(ProductsgraphComponent, { width: '80vh', height: '70vh', disableClose: true, enterAnimationDuration: '200ms', exitAnimationDuration: '200ms', data: [...this.allData] })
  }

}








