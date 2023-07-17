import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { AuthService } from 'src/app/services/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'team-center-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent {
  error:any =false;
  errmsg: any;

  constructor(private dialogRef:MatDialogRef<UploadComponent>,private service:AuthService,private router:Router){

  }
  _version:any;
  doc_type:any;
  formData:any;
  heading = "Upload Document Details";
  url: any = this.router.url.split('/');
  clientid = parseInt(this.url[3]);
  productid = parseInt(this.url[4]);

  submit()
  {
    this.formData.append('document_type',this.doc_type);
    this.formData.append('version',this._version);
    this.service.sendDoc(this.clientid,this.productid,this.formData).subscribe((res: any) => {
      if (res.status == 1) {
        this.dialogRef.close();
      }
      else {
        this.error = "true";
        this.errmsg = res.message;
      }
    });
  
  }
  onFileSelected(event:any)
  {
    this.formData = new FormData();
    this.formData.append('file', event.target.files[0]);
  }

  upload: any = new FormGroup({
    doctype: new FormControl('', [Validators.required]),
    version: new FormControl('', [Validators.required]),
  })

  doc: any[] = [
    {value: 'text', viewValue: 'text'},
    {value: 'docs', viewValue: 'docs'},
    {value: 'zip', viewValue: 'zip'},
  ];
  // mySelectedValue :any;


}
