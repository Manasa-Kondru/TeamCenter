import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
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
  constructor(private dialogRef:MatDialogRef<AddUserComponent>,private service:AuthService){

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
    // this.selectedPhoto = event.target.files[0];
   //this.filename = event.target.files[0].name;
    this.formData.append('photo', event.target.files[0]);
   
  }


 //uploads:any=[];

// saveImage(e:any)
// {
// let totalFiles = e.target.files ;
// if(totalFiles.length > 0)
// {
//   for(let i=0;i<totalFiles.length;i++)
//   {
//     let file =totalFiles[i];
//     const reader = new FileReader();
//     reader.readAsDataURL(file);
//     reader.onload = (e:any) => 
//     {
//       let url:any = e.target.result;
//       this.uploads.push(url);
//     }
//   }
// }
// }



}
