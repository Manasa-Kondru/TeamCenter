import { Component, Output, EventEmitter, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddClientComponent } from '../add-client/add-client.component';
import { AuthService } from 'src/app/services/auth.service';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'team-center-projectdata',
  templateUrl: './projectdata.component.html',
  styleUrls: ['./projectdata.component.scss']
})
export class ProjectdataComponent {

//   constructor(private matdialog:MatDialog, private service:AuthService)
//   {
// this.displayClients();
//   }
 

//   displayedColumns: string[] = ['client_name', 'on_boarding_time', 'no_of_products', ' '];
//   dataSource:any;
//   element:any;

//   displayClients() {
//     let token: any = localStorage.getItem("token");

//     this.service.clientData(token).subscribe((res: any)=>
//     {
//       console.log(res);
//       this.dataSource = res.clients;
//       this.element =res;
//     })
//   }

//   on_change(event: any) {
//     let data: any = [...this.element];
//     data = data.filter((ele: any) => { let val: any = (ele.client).toLowerCase(); return val.includes((event).toLowerCase()); });
//     this.dataSource = [...data];
//   }

 
//   addClient()
//   {
//     this.matdialog.open(AddClientComponent);
//   }

//   data : any=null ;


  allData: any = [];
 displayedColumns: string[] = ['client_name', 'on_boarding_time', 'no_of_products', ' '];
dataSource: any;

  constructor(private matdialog: MatDialog, private service: AuthService) { }
    
    ngOnInit(): void {
      this.displayClients();
    }

async  displayClients() {
    let token: any = localStorage.getItem("token");
this.allData = await this.getClient(token);
this.dataSource  =  new MatTableDataSource([...this.allData]);
}
 


  addClient() {
    this.matdialog.open(AddClientComponent)
  }

  on_change(event: any) {
    let data: any = [...this.allData];
    data = data.filter((ele: any) => {
    return (ele.client_name.toLowerCase()).includes(event) 
    });
    this.dataSource = [...data];
  }



  getClient(token:any)
  {
    return new Promise((resolve:any)=>
    {
      this.service.clientData(token).subscribe((res: any)=>
        {
          if(res.status==1)
          {
            resolve (res.clients);
          }
          else
          resolve([])
        
       })
    })
  }



}








