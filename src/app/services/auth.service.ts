import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient:HttpClient) { }
  url="http://192.168.100.18:5000";
  // url="http://192.168.100.44:5002"

  verifyLogin(emailid:any)
  {
   return this.httpClient.post(`${this.url}/api/otp/send`,{email:emailid});
   //return this.httpClient.post(`${this.url}/api/v1/authenticate/login`,{email:emailid});
  }

  verifyOtp(obj:any)
  {
    return this.httpClient.post(`${this.url}/api/otp/verify`,obj);
  // return this.httpClient.post(`${this.url}/api/v1/authenticate/verifyotp`,obj);
  }

  // resendOTP(scode_value:any)
  // {
  //   return this.httpClient.post(`${this.url}/api/otp/verify`,{scode:scode_value});
  // }
 

}
