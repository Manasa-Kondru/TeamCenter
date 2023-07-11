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

  constructor(private matdialog: MatDialog, private service: AuthService) { }

allData: any = [];
displayedColumns: string[] = ['client_name', 'on_boarding_time', 'no_of_products', ' '];
dataSource: any;



ngOnInit(): void {
  this.displayClients();
} 
    
   

async  displayClients() { 
this.allData = await this.getClient();
this.dataSource  =  new MatTableDataSource([...this.allData]);
}
 


 addClient() {
    this.matdialog.open(AddClientComponent,{disableClose:true,enterAnimationDuration:'200ms',exitAnimationDuration:'200ms'})
  }

  on_change(event: any) {
    let data: any = [...this.allData];
    data = data.filter((ele: any) => {
    return (ele.client_name.toLowerCase()).includes(event) 
    });
    this.dataSource = [...data];
    
  }



  getClient()
  {
    return new Promise((resolve:any)=>
    {
      this.service.clientData().subscribe((res: any)=>
        {
          if(res.status==1)
          {
            resolve (res.data);
            console.log(res);
          }
          else
          resolve([])
        
       })
    })
  }



}








