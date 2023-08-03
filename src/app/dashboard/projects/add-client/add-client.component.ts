// import { Component } from '@angular/core';
// import { MatDialogRef } from '@angular/material/dialog';
// import { AuthService } from 'src/app/services/auth.service';
// import { FormControl, FormGroup, Validators } from '@angular/forms';

// @Component({
//   selector: 'team-center-add-client',
//   templateUrl: './add-client.component.html',
//   styleUrls: ['./add-client.component.scss']
// })
// export class AddClientComponent {

//   cname: any;
//   noOfProducts: any;
//   error:any = false;
//   errmsg:any = '';

//   constructor(private dialogRef: MatDialogRef<AddClientComponent>, private service: AuthService) { }

//   addClient: any = new FormGroup({
//     clientname: new FormControl('', [Validators.required]),
//     nfproducts: new FormControl('', [Validators.required]),
//   })

//   sendClient() {
//     let obj: any = { "client_name": this.cname, "no_of_products": this.noOfProducts };
//     this.service.clientSender(obj).subscribe((res: any) => {
//       if (res.status === 1) {
//         this.dialogRef.close();
//       }
//       else {
//         this.error = "true";
//         this.errmsg = res.message;
//       }
//     });
//   }



// }


import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { AuthService } from 'src/app/services/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'team-center-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.scss']
})
export class AddClientComponent {
  error: boolean = false;
  errmsg: string = '';

  constructor(private dialogRef: MatDialogRef<AddClientComponent>, private service: AuthService) {}

  addClient: FormGroup = new FormGroup({
    clientname: new FormControl('', [Validators.required]),
  });

  sendClient(): void {
    if (this.addClient.valid) {
      const obj = { client_name: this.addClient.value.clientname};
      let token:any=localStorage.getItem('token');
      this.service.clientSender(obj,token).subscribe(
        (res: any) => {
          if (res.status === 1) {
            this.dialogRef.close();
          } else {
            this.error = true;
            this.errmsg = res.message;
          }
        },
        (error) => {
          this.error = true;
          console.error('Error sending client:', error);
        }
      );
    } else {
      // Mark the form as touched to display validation errors if any
    }
  }
}