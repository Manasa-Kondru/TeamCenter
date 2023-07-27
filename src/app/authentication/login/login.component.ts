import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'team-center-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  errormsg = false;
  errmsg: any = "";
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);

  constructor(private fb: FormBuilder, private route: Router, private service: AuthService, private http: HttpClient) {   }

  routeTo() {
    this.service.verifyLogin(this.emailFormControl.value).subscribe((res: any) => {
      if (res.status == 1) {
        localStorage.setItem("scode", res.code);
        localStorage.setItem("email", res.email);
        this.route.navigate(['auth/otp']);
      }
      else {
        this.errmsg = res.message;
      }
    })
  }
}
