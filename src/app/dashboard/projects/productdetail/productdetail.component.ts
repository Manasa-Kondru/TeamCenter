import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from 'src/app/services/auth.service';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';


@Component({
  selector: 'team-center-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.scss']
})
export class ProductdetailComponent {

  allData: any = [];
  displayedColumns: string[] = ['doc_type', 'released_date', 'released_by', ' '];
  dataSource: any;

  constructor(private matdialog: MatDialog, private service: AuthService, private router: Router) {
    let url: any = this.router.url.split('/');
 
    let no = parseInt(url[3])
    this.displayProduct(no);

  }

  ngOnInit(): void {
    this.displayDocs();
   

  }


  data: any = [];
  element: any;

  url: any = this.router.url.split('/');
  number = parseInt(this.url[3])
 


  displayProduct(id: any): void {


    this.service.productData(id).subscribe((res: any) => {

      this.data = res.products;

    })
  }



  async displayDocs() {

    this.allData = await this.getDoc();
    this.dataSource = new MatTableDataSource([...this.allData]);
  }


  getDoc() {
    return new Promise((resolve: any) => {
      this.service.getDocData().subscribe((res: any) => {
        if (res.status == 1) {
          resolve(res.documents);
        }
        else
          resolve([])

      })
    })
  }


  f_panelOpenState = false;
  a_panelOpenState = false;
  d_panelOpenState = false;
  panelOpenState = false;


  // @Input()
  // product_name!: string;
  // productname="";

  //  product_name()
  //  {

  //  }

}
