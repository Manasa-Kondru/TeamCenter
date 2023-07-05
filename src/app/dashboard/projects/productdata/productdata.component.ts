import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddProductComponent } from '../add-product/add-product.component';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'team-center-productdata',
  templateUrl: './productdata.component.html',
  styleUrls: ['./productdata.component.scss']
})
export class ProductdataComponent {


  constructor(private matdialog:MatDialog,private service:AuthService,private router:Router)
{

let url:any = this.router.url.split('/');
console.log(url);
this.displayProducts(parseInt(url[2]));
}

dataSource:any=[];
element:any;

displayProducts(id:any) {
  let token: any = localStorage.getItem("token");

  this.service.productData(token,id).subscribe((res: any)=>
  {
    console.log(res);
    this.dataSource = res.products;
    this.element =res;
  })
}

addProduct()
{
  this.matdialog.open(AddProductComponent)
}

  displayedColumns: string[] = ['products', 'onboardingtime', 'createdby','view'];
 // dataSource = ELEMENT_DATA;

  on_change(event: any) {
    let data: any = [...this.element];
    data = data.filter((ele: any) => { 
      // let val: any = (ele.products).toLowerCase();
       return (ele.products.toLowerCase()).includes((event).toLowerCase()) || (ele.onboardingtime.toLowerCase().includes((event).toLowerCase())); });
    this.dataSource = [...data];
  }
  
}



// const ELEMENT_DATA: any[] = [
//   {
//     products:"Edge 2.0",onboardingtime:"April 14 at 10:04 am",createdby:"xxxxxxx",view:""
//   },
//   {
//     products:"Hub Next",onboardingtime:"April 12 at 09:09 am",createdby:"xxxxxxx",view:""
//   },
//   {
//     products:"Rayon Smart Energy Meter 3 CT's",onboardingtime:"April 09 at 11:04 am",createdby:"xxxxxxx",view:""
//   },
//   {
//     products:"Rayon Smart Energy Meter 6 CT's",onboardingtime:"April 16 at 12:04 pm",createdby:"xxxxxxx",view:""
//   },
//   {
//     products:"Smart Socket IND",onboardingtime:"March 24 at 10:04 am",createdby:"xxxxxxx",view:""
//   },
//   {
//     products:"Smart Socket USA",onboardingtime:"March 14 at 10:05 am",createdby:"xxxxxxx",view:""
//   },
//   {
//     products:"Smart Socket AUS",onboardingtime:"March 15 at 11:04 a.m",createdby:"xxxxxxx",view:""
//   }, {
//     products:"Smart Socket EU",onboardingtime:"March 22 at 09:04 a.m",createdby:"xxxxxxx",view:""
//   },
//   {
//     products:"Smart Socket UK",onboardingtime:"April 14 at 10:04 a.m",createdby:"xxxxxxx",view:""
//   },
//   {
//     products:"Single in-Wally Relay",onboardingtime:"March 15 at 11:04 a.m",createdby:"xxxxxxx",view:""
//   },
//   {
//     products:"Dual in-Wally Relay",onboardingtime:"March 22 at 09:04 a.m",createdby:"xxxxxxx",view:""
//   }
// ]
