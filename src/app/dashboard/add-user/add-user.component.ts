import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'team-center-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent {
  uname:any;
  role:any;
  email_id:any;
  user_type: any;
 
  utype:any;
  constructor(private dialogRef:MatDialogRef<AddUserComponent>,private service:AuthService,private _snackBar: MatSnackBar){

  }
 


  addUser: any = new FormGroup({
    username: new FormControl('', [Validators.required]),
    role: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    usertype: new FormControl('', [Validators.required]),
  })

error:any =false;
errmsg:any;
formData:any
  sendUser()
  {
    this.formData.append('name',this.uname);
    this.formData.append('Role',this.role);
    this.formData.append('email',this.email_id);
    this.formData.append('user_type',this.utype);
  
    this.service.userSender(this.formData).subscribe((res: any) => {
      if (res.status == 1) {
        this._snackBar.open(res.message);
        this.dialogRef.close();
      
      }
      else {
        this.error = "true";
        this.errmsg = res.message;
      }
    });
  
  }
  filename: any;
  
  onPhotoSelected(event: any) {
    this.formData = new FormData();
    this.formData.append('photo', event.target.files[0]);
   
  }
}
