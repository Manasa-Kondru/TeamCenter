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
  constructor(private dialogRef:MatDialogRef<AddUserComponent>,private service:AuthService){

  }

  addUser: any = new FormGroup({
    username: new FormControl('', [Validators.required]),
    role: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
  })



  sendUser()
  {
    let obj:any = {"name":this.uname,"Role":this.role,"email_id":this.email_id};
    this.service.userSender(obj);
    console.log(obj);
  }
}
