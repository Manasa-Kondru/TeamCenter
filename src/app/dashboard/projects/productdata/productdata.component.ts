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


  on_change(event: any) {
    let data: any = [...this.element];
    data = data.filter((ele: any) => { 
      // let val: any = (ele.products).toLowerCase();
       return (ele.products.toLowerCase()).includes((event).toLowerCase()) || (ele.onboardingtime.toLowerCase().includes((event).toLowerCase())); });
    this.dataSource = [...data];
  }
  
}




