import { Component } from '@angular/core';
import { AduanService } from '../services/aduan.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  aduanList: Array<any>;

  constructor(public aduanService: AduanService){
    // this.aduanList = [
    //   {id: 1, title: "Lantai Rosak", kategori: "Kerosakan"},
    //   {id: 2, title: "Pembakaran Terbuka", kategori: "Pencemaran"},
    //   {id: 3, title: "Bunyi Bising", kategori: "Gangguan"}
    // ];
    this.aduanService.getAduanAll().then(res => {
      let response: any = res;
      this.aduanList = response.feedData;
    })
  }
}
