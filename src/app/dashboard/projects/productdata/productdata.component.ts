import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddProductComponent } from '../add-product/add-product.component';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'team-center-productdata',
  templateUrl: './productdata.component.html',
  styleUrls: ['./productdata.component.scss']
})
export class ProductdataComponent {


  constructor(private matdialog: MatDialog, private service: AuthService, private router: Router) {

    let url: any = this.router.url.split('/');
    console.log(url);
    this.displayProducts(parseInt(url[3]));
  }

  dataSource: any = [];
  element: any;

  displayProducts(id: any) {
   

    this.service.productData( id).subscribe((res: any) => {
      console.log(res);
      this.dataSource = res.products;
      this.element = res;
    })
  }

  addProduct() {
    this.matdialog.open(AddProductComponent, 
      { disableClose: true, enterAnimationDuration: '200ms', exitAnimationDuration: '200ms' })
  }

  displayedColumns: string[] = ['products', 'onboardingtime', 'createdby', 'view'];


  on_change(event: any) {
    let data: any = [...this.element];
    data = data.filter((ele: any) => {
      return (ele.product_name.toLowerCase()).includes((event).toLowerCase()) || (ele.onboardingtime.toLowerCase().includes((event).toLowerCase()));
    });
    this.dataSource = [...data];
  }

  // on_change(event: any) {
  //   let data: any = [...this.allData];
  //   data = data.filter((ele: any) => {
  //   return (ele.client_name.toLowerCase()).includes(event) 
  //   });
  //   this.dataSource = [...data];
  // }

 

//   @Output()
//   emitter = new EventEmitter<string> ();
//   emit(product_name:any)
//   {
// this.emitter.emit(product_name);
//   }


}




