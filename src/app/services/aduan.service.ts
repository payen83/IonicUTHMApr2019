import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AduanService {

  baseURL: string = 'http://localhost:8888/helpdesk/api';

  constructor(public http: HttpClient) { }

  getAduanAll(){
    return new Promise((resolve, reject)=>{
      this.http.get(this.baseURL+'/getAduanAll')
      .subscribe(res => {
        let response: any = res;
        resolve(response);
      }, err => {
        reject(err);
      })
    });
  } // end of getAduanAll function


}
