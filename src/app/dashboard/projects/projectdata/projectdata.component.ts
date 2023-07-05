import { Component, Output, EventEmitter, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddClientComponent } from '../add-client/add-client.component';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'team-center-projectdata',
  templateUrl: './projectdata.component.html',
  styleUrls: ['./projectdata.component.scss']
})
export class ProjectdataComponent {

  constructor(private matdialog:MatDialog, private service:AuthService)
  {
this.displayClients();
  }
 

  displayedColumns: string[] = ['client_name', 'on_boarding_time', 'no_of_products', ' '];
  dataSource:any;
  element:any;

  displayClients() {
    let token: any = localStorage.getItem("token");

    this.service.clientData(token).subscribe((res: any)=>
    {
      console.log(res);
      this.dataSource = res.clients;
      this.element =res;
    })
  }

  on_change(event: any) {
    let data: any = [...this.element];
    data = data.filter((ele: any) => { let val: any = (ele.client).toLowerCase(); return val.includes((event).toLowerCase()); });
    this.dataSource = [...data];
  }

 
  addClient()
  {
    this.matdialog.open(AddClientComponent);
  }

  data : any=null ;



}




// const ELEMENT_DATA: any[] = [
//   { client: "Jio", on_boarding_time: " April 14 at 10:04 am", no_of_products: "55" },
//   { client: "Schneider Electric", on_boarding_time: " April 12 at 09:09 am", no_of_products: "48" },
//   { client: "Power tech", on_boarding_time: "April 09 at 11:04 am", no_of_products: "58" },
//   { client: "CMS", on_boarding_time: "April 16 12:04 pm", no_of_products: "32" },
//   { client: "Brilliant", on_boarding_time: "March 24 at 10:04 am", no_of_products: "22" },
//   { client: "Samsung", on_boarding_time: " March 14 at 10:05 am", no_of_products: "29" },
//   { client: "Panasonic", on_boarding_time: "March 15 at 11:04 am", no_of_products: "59" },
//   { client: "Brivo", on_boarding_time: "March 22 at 09:04 am", no_of_products: "62" },
//   { client: "i2M", on_boarding_time: "April a4 at 10:04 am", no_of_products: "78" },];




