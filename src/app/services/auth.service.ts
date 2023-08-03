import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root' // since this service depends on other services.
})

export class AuthService {

  constructor(private httpClient: HttpClient) { }
  base_url = "http://192.168.100.13:3000";

  verifyLogin(emailid: any) {
    return this.httpClient.post(`${this.base_url}/api/otp/send`, { email: emailid });

  }

  verifyOtp(obj: any) {
    return this.httpClient.post(`${this.base_url}/api/otp/verify`, obj);

  }

  userData(t:any) {
    let token:any =`Bearer ${t}`
    return this.httpClient.get(`${this.base_url}/api/users`, { headers: { Authorization: token } })
  }

  resendOTP(scode_value: any) {
    return this.httpClient.post(`${this.base_url}/api/otp/resend`, scode_value);
  }

  clientData(t:any) {
    let token:any =`Bearer ${t}`
    return this.httpClient.get(`${this.base_url}/api/clients`, { headers: { Authorization: token } })
  }

  recents(t:any)
{
  let token:any =`Bearer ${t}`
  return this.httpClient.get(`${this.base_url}/api/documents/recents`, { headers: { Authorization: token } })

}

  productData(id: any,t:any) {
    let token:any =`Bearer ${t}`
    return this.httpClient.get(`${this.base_url}/api/products/${id}`, { headers: { Authorization: token } })
  }

  userSender(obj: any,t:any) {
    let token:any =`Bearer ${t}`
    return this.httpClient.post(`${this.base_url}/api/addUser`, obj, { headers: { Authorization: token } });
  }

  clientSender(obj: any,t:any) {
    let token:any =`Bearer ${t}`
    return this.httpClient.post(`${this.base_url}/api/clients/add-client`, obj, { headers: { Authorization: token } });
  }


  productSender(id: any, obj: any,t:any) {
    let token:any =`Bearer ${t}`
    return this.httpClient.post(`${this.base_url}/api/products/${id}/add-product`, obj, { headers: { Authorization: token } });
  }

  getDocData(cid:any,pid:any,t:any) {
    let token:any =`Bearer ${t}`
    return this.httpClient.get(`${this.base_url}/api/documents/${cid}/${pid}`, { headers: { Authorization: token } })
  }

getNavInfo(t:any)
{
  let token:any =`Bearer ${t}`
  return this.httpClient.get(`${this.base_url}/api/users-details`, { headers: { Authorization: token } })
}

download(t:any)
{
  let token:any =`Bearer ${t}`
  return this.httpClient.get(`${this.base_url}/api/documents/firmware/1_1_test11.zip`, { headers: { Authorization:token } })
}

sendDoc(cid: any,pid:any, obj: any,t:any)
{
  let token:any =`Bearer ${t}`
  return this.httpClient.post(`${this.base_url}/api/documents/${cid}/${pid}/upload-docs`, obj, { headers: { Authorization: token } });
}

file_retrieve(docid:any,t:any)
{
  let token:any =`Bearer ${t}`
  return this.httpClient.get(`${this.base_url}/api/documents/docs/${docid}/download`, { headers: { Authorization: token },observe: 'response',responseType: 'blob' })
}


}
