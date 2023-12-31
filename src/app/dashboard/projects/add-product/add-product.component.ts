import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'team-center-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent {
  pname: any;
  boardtime: any;
  createdby: any;
  error: any = false;
  errmsg: any;

  constructor(private dialogRef: MatDialogRef<AddProductComponent>, private service: AuthService, private router: Router) { }

  addProduct: any = new FormGroup({
    product: new FormControl('', [Validators.required]),
  })

  sendProduct() {
    let url: any = this.router.url.split('/');
    let obj: any = { "product_name": this.pname, "onBoarding_time": this.boardtime, "created_By": this.createdby };
    let token:any =localStorage.getItem('token');
    this.service.productSender(parseInt(url[3]), obj,token).subscribe((res: any) => {
      if (res.status === 1) {
        this.dialogRef.close();
      }
      else {
        this.error = "true";
        this.errmsg = res.message;
      }
    });
  }

}
