import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from 'src/app/services/auth.service';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { UploadComponent } from '../upload/upload.component';


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
  dataSource: any;
  firmwaredata: any;
  data: any = [];
  url: any = this.router.url.split('/');
  clientid = parseInt(this.url[3]);
  productid = parseInt(this.url[4]);


  f_panelOpenState = false;
  a_panelOpenState = false;
  d_panelOpenState = false;
  panelOpenState = false;

  // constructor

  constructor(private matdialog: MatDialog, private service: AuthService, private router: Router) { }

  // ngonit

  ngOnInit(): void {
    let url: any = this.router.url.split('/');
    let clientid = parseInt(url[3]);
    this.displayProduct(clientid);
    this.displayDocs(false, '');
  }

  // OnChange

  on_change(event: any) {
    this.displayDocs(true, event);
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
    if (docs)
      this.dataSource = new MatTableDataSource([...docs]);
    let firm_w = this.allData["firmware"];
    if (search === true)
      firm_w = firm_w.filter((ele: any) => { return ((ele.document_type).toLowerCase()).includes((search).toLowerCase()) });
    if (firm_w)
      this.firmwaredata = new MatTableDataSource([...firm_w]);
  }


  getDoc() {
    return new Promise((resolve: any) => {
      this.service.getDocData(this.clientid, this.productid).subscribe((res: any) => {
        if (res.status == 1) {
          resolve(res.data);
        }
        else
          resolve([])
      })
    })
  }

  //calling dailog
  upload() {
    this.matdialog.open(UploadComponent, { disableClose: true, enterAnimationDuration: '200ms', exitAnimationDuration: '200ms' })
  }

  //downloading file
  
  fetch_file(docid: any) {
    this.service.file_retrieve(docid).subscribe(
      (res: any) => {
        let fileName = res.headers.get('Content-Disposition')?.split(';')[1].split('=')[1];
        console.log(res.headers.get('Content-Disposition'))
        let blob: Blob = res.body as Blob;
        console.log(res.body);
        let a = document.createElement('a');
        a.download = fileName;
        a.href = window.URL.createObjectURL(blob);
        a.click();
      }
    )
  }

}

