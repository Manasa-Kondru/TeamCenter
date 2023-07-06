import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) { }
  url = "http://192.168.100.18:5000";


  verifyLogin(emailid: any) {
    return this.httpClient.post(`${this.url}/api/otp/send`, { email: emailid });

  }

  verifyOtp(obj: any) {
    return this.httpClient.post(`${this.url}/api/otp/verify`, obj);

  }

  userData(token: any) {
    let tokenValue: any = `Bearer ${token}`;
    return this.httpClient.get(`${this.url}/api/users`, { headers: { Authorization: tokenValue } })
  }

  resendOTP(scode_value: any) {
    return this.httpClient.post(`${this.url}/api/otp/resend`, scode_value);
  }

  clientData(token: any) {
    let tokenValue: any = `Bearer ${token}`;
    return this.httpClient.get(`${this.url}/api/clients`, { headers: { Authorization: tokenValue } })
  }

  productData(token: any, id: any) {
    let tokenValue: any = `Bearer ${token}`;
    return this.httpClient.get(`${this.url}/api/products`+id+`add-product`, { headers: { Authorization: tokenValue } })
  }

  userSender(obj: any) {
    return this.httpClient.post(`${this.url}/api/addUser`, obj);
  }



  clientSender(obj: any, token: any) {
    let tokenValue: any = `Bearer ${token}`;
    return this.httpClient.post(`${this.url}/api/clients/add-client`, obj, { headers: { Authorization: tokenValue } });
  }



  productSender(obj: any) {
    return this.httpClient.post(`${this.url}/api/otp/users/addProduct`, obj);
  }



}
