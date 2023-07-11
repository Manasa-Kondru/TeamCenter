import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) { }
  url = "http://192.168.100.18:5000";

  token: any = 'Bearer' + ' ' + localStorage.getItem("token");

  verifyLogin(emailid: any) {
    return this.httpClient.post(`${this.url}/api/otp/send`, { email: emailid });

  }

  verifyOtp(obj: any) {
    return this.httpClient.post(`${this.url}/api/otp/verify`, obj);

  }

  userData() {
    return this.httpClient.get(`${this.url}/api/users`, { headers: { Authorization: this.token } })
  }

  resendOTP(scode_value: any) {
    return this.httpClient.post(`${this.url}/api/otp/resend`, scode_value);
  }

  clientData() {
    return this.httpClient.get(`${this.url}/api/clients`, { headers: { Authorization: this.token } })
  }

  productData(id: any) {
    return this.httpClient.get(`${this.url}/api/products/${id}`, { headers: { Authorization: this.token } })
  }

  userSender(obj: any) {
    return this.httpClient.post(`${this.url}/api/addUser`, obj, { headers: { Authorization: this.token } });
  }

  clientSender(obj: any) {
    return this.httpClient.post(`${this.url}/api/clients/add-client`, obj, { headers: { Authorization: this.token } });
  }


  productSender(id: any, obj: any) {
    return this.httpClient.post(`${this.url}/api/products/${id}/add-product`, obj, { headers: { Authorization: this.token } });
  }

  getDocData() {
    return this.httpClient.get(`${this.url}/api/documents`, { headers: { Authorization: this.token } })
  }

getNavInfo()
{
  return this.httpClient.get(`${this.url}/api/users-details`, { headers: { Authorization: this.token } })
}

}
