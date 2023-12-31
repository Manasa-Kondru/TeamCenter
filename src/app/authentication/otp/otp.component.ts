import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'team-center-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.scss']
})
export class OtpComponent implements OnInit, OnDestroy {
  userinfo: any;
  email: any = localStorage.getItem("email");
  tempcode: any = localStorage.getItem("scode");
  myerrmsg: any = "";

  constructor(private service: AuthService, private router: Router) { }

  ngOnInit(): void { }

  ngOnDestroy(): void {
    localStorage.removeItem("scode");
  }

  otp: any = new FormGroup({
    t1: new FormControl('', [Validators.required]),
    t2: new FormControl('', [Validators.required]),
    t3: new FormControl('', [Validators.required]),
    t4: new FormControl('', [Validators.required]),
    t5: new FormControl('', [Validators.required]),
    t6: new FormControl('', [Validators.required]),
  }
  )

  move(e: any, prev: any, current: any, next: any) {
    var length = current.value.length;
    var maxlength = current.getAttribute('maxlength'); // we can also give 1 here rather than taking value from html.
    if (length == 1) {
      {
        if (next != '')
          next.focus();//javascript predefined method
      }
    }
    if (e.key === 'Backspace') {
      prev.focus()
    }
  }

  verify() {
    let otp_code: any = this.otp.controls.t1.value + this.otp.controls.t2.value +
      this.otp.controls.t3.value + this.otp.controls.t4.value + this.otp.controls.t5.value + this.otp.controls.t6.value;
    console.log(otp_code);

    this.service.verifyOtp({ otp: otp_code, scode: this.tempcode }).subscribe((res: any) => {
      if (res.status == 1) {
        localStorage.setItem("token", res.token);
        this.router.navigate(['auth/congrats']);
      }
      else {
        this.myerrmsg = res.message;
      }
    },
    )
  }

  resend() {
    this.service.resendOTP({ code: this.tempcode }).subscribe((res: any) => {
    });
  }

}

// import { Component, OnDestroy, OnInit } from '@angular/core';
// import { AuthService } from 'src/app/services/auth.service';
// import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'team-center-otp',
//   templateUrl: './otp.component.html',
//   styleUrls: ['./otp.component.scss']
// })
// export class OtpComponent implements OnInit, OnDestroy {
//   email: any = localStorage.getItem('email');
//   tempcode: any = localStorage.getItem('scode');
//   myerrmsg: any = '';
//   otpForm: FormGroup;

//   constructor(private service: AuthService, private router: Router, private fb: FormBuilder) {
//     this.otpForm = this.fb.group({
//       otp: this.fb.array([], [Validators.required, Validators.maxLength(1)])
//     });
//   }

//   ngOnDestroy(): void {
//     localStorage.removeItem('scode');
//   }



//   move(e: any, prev: any, current: any, next: any) {
//     const length = current.value.length;
//     const maxlength = current.getAttribute('maxlength');
//     if (length === 1 && next) {
//       next.focus();
//     }
//     if (e.key === 'Backspace' && prev) {
//       prev.focus();
//     }
//   }

//   verify(): void {
//     const otpCode = this.otpForm.value.otp.join('');
//     this.service.verifyOtp({ otp: otpCode, scode: this.tempcode }).subscribe((res: any) => {
//       if (res.status === 1) {
//         localStorage.setItem('token', res.token);
//         this.router.navigate(['auth/congrats']);
//       } else {
//         this.myerrmsg = res.message;
//       }
//     });
//   }

//   resend(): void {
//     this.service.resendOTP({ code: this.tempcode }).subscribe((res: any) => {
//       // Handle the response if needed
//     });
//   }
// }

