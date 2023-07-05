import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { AuthService } from 'src/app/services/auth.service';
import { FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'team-center-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.scss']
})
export class AddClientComponent {

  cname:any;
  noOfProducts:any;
 
  constructor(private dialogRef:MatDialogRef<AddClientComponent>,private service:AuthService){

  }

  addClient: any = new FormGroup({
    clientname: new FormControl('', [Validators.required]),
    nfproducts: new FormControl('', [Validators.required]),
   
  })



  sendProduct()
  {
    let obj:any = {"client_name":this.cname,"no_of_products":this.noOfProducts};
    this.service.clientSender(obj);
    console.log(obj);
  }

  sendclient()
  {
    
  }

}
