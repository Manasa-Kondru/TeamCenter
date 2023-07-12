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


  callFun() {
    this.service.download().subscribe((res: any) => {

    })
  }

  allData: any = [];
  displayedColumns: string[] = ['doc_type', 'released_date', 'released_by', 'download'];
  displayedColumnsdocs: string[] = ['doc_type', 'released_date', 'released_by', 'download'];
  dataSource: any;
  firmwaredata: any;
  data: any = [];
  element: any;
  url: any = this.router.url.split('/');
  clientid = parseInt(this.url[3]);
  prodctid = parseInt(this.url[4]);
  firmdata: any;

  allfirmwareData: any;

  f_panelOpenState = false;
  a_panelOpenState = false;
  d_panelOpenState = false;
  panelOpenState = false;

  // constructor

  constructor(private matdialog: MatDialog, private service: AuthService, private router: Router) {
    let url: any = this.router.url.split('/');
    let clientid = parseInt(url[3]);
    this.displayProduct(clientid);
  }

  // ngonit

  ngOnInit(): void {
    this.displayDocs(false,'');
    //this.displayFirmWare();
    console.log(this.data)
  }

  // OnChange

  on_change(event: any) {
    // let datadocs: any = [...this.allData];
    this.displayDocs(true, event);
    console.log(event)

    // datafirmware = datafirmware.filter((ele: any) => {
    //   return (ele.product_name.toLowerCase()).includes(event);
    // });
    // this.firmwaredata = [...datafirmware];
  }

  // Displaying name of the product

  displayProduct(id: any): void {
    this.service.productData(id).subscribe((res: any) => {
      if (res.status == 1) {
        this.data = res.products.filter((el: any) => { return parseInt(el.product_id) == parseInt(this.url[4]) });
      }
    })
  }


  //Displaying documents

  async displayDocs(search?: any, search_v?: any) {
    this.allData = await this.getDoc();
    let docs: any = this.allData["text"];
    if (search === true)
      docs = docs.filter((ele: any) => { return ((ele.document_type).toLowerCase()).includes((search_v).toLowerCase()) });
    this.dataSource = new MatTableDataSource([...docs]);
    let firm_w = this.allData["firmware"];
    if (search === true)
    firm_w = firm_w.filter((ele: any) => { return ((ele.document_type).toLowerCase()).includes((search).toLowerCase()) });
    this.firmwaredata = new MatTableDataSource([...firm_w]);

  }


  getDoc() {
    return new Promise((resolve: any) => {
      this.service.getDocData().subscribe((res: any) => {
        if (res.status == 1) {
          resolve(res.data);
        }
        else
          resolve([])
      })
    })
  }


  //Displaying Firmware



  // async displayFirmWare() {
  //   this.allfirmwareData = await this.getFirmware();
  //   this.firmwaredata = new MatTableDataSource([...this.allfirmwareData]);
  // }


  // getFirmware() {
  //   return new Promise((resolve: any) => {
  //     this.service.getDocData().subscribe((res: any) => {
  //       if (res.status == 1) {
  //         resolve(res.data.firmware);
  //       }
  //       else
  //         resolve([])
  //     })
  //   })
  // }

}
