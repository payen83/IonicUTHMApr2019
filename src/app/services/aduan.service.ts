import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AduanService {

  baseURL: string = 'http://localhost:8888/helpdesk/api';
  // baseURL: string = 'http://helpdesk.appsmalaya.com/api';
  aduanList: Array<any>;
  constructor(public http: HttpClient) { }

  doLogin(user: any) {
    console.log(user);
    return new Promise((resolve, reject) => {
      this.http.post(this.baseURL+'/login', JSON.stringify(user))
      .subscribe(res => {
        let response: any = res;
        if(response.userData){
          // login successful
          resolve(response);
        } else {
          //login failed
          console.log(response);
          reject('Login failed');
        }
      }, err => {
        reject(err);
      })
    });
  }

  getDetail(id: any){
    let aduan = this.aduanList.find(item => {
      return item.aduan_id == id;
    });
    return aduan;
  }

  getAduanAll(){
    return new Promise((resolve, reject)=>{
      this.http.get(this.baseURL+'/getAduanAll')
      .subscribe(res => {
        let response: any = res;
        this.aduanList = response.feedData;
        resolve(response);
      }, err => {
        reject(err);
      })
    });
  } // end of getAduanAll function


}
