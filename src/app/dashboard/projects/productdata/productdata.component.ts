import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddProductComponent } from '../add-product/add-product.component';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'team-center-productdata',
  templateUrl: './productdata.component.html',
  styleUrls: ['./productdata.component.scss']
})
export class ProductdataComponent implements OnInit {

  displayedColumns: string[] = ['sno','products', 'onboardingtime', 'createdby', 'view'];
  dataSource: any = [];
  element: any;
  allData: any;

  constructor(private matdialog: MatDialog, private service: AuthService, private router: Router) { }


  ngOnInit(): void {
    let url: any = this.router.url.split('/');
    this.displayProducts(parseInt(url[3]));
  }


  addProduct() {
    this.matdialog.open(AddProductComponent,
      { disableClose: true, enterAnimationDuration: '200ms', exitAnimationDuration: '200ms' })
  }


  on_change(event: any) {
    let data: any = [...this.allData];
    data = data.filter((ele: any) => {
      return (ele.product_name.toLowerCase()).includes(event)
    });
    this.dataSource = [...data];
  }

  async displayProducts(id: any) {
    this.allData = await this.getProduct(id);
    this.dataSource = new MatTableDataSource([...this.allData]);
  }

  getProduct(id: any) {
    return new Promise((resolve: any) => {
      this.service.productData(id).subscribe((res: any) => {
        if (res.status == 1)
          resolve(res.products);
        else
          resolve([])
      })
    })
  }
}




