import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'team-center-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent {
  pname:any;
  boardtime:any;
  createdby:any;
  constructor(private dialogRef:MatDialogRef<AddProductComponent>,private service:AuthService){

  }

  addProduct: any = new FormGroup({
    product: new FormControl('', [Validators.required]),
    boardingtime: new FormControl('', [Validators.required]),
    creatingby: new FormControl('', [Validators.required]),
  })



  sendProduct()
  {
    let obj:any = {"product_name":this.pname,"onBoarding_time":this.boardtime,"created_By":this.createdby};
    this.service.productSender(obj);
    console.log(obj);
  }

}
