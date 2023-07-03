import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'team-center-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  errormsg = false;
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  constructor(private fb:FormBuilder, private route:Router)
  {

  }

  routeTo() {
    if (this.emailFormControl.value =='manasakondru5@gmail.com') {
      this.route.navigate(['auth/otp']);
    } else {
      this.errormsg = true;
    }
  }
  
}
