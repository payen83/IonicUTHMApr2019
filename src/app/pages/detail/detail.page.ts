import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AduanService } from 'src/app/services/aduan.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  aduan: any;
  id: string;
  constructor(
    public activatedRoute: ActivatedRoute, 
    public aduanService: AduanService) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.aduan = this.aduanService.getDetail(this.id);
    console.log(this.aduan);
  }

}
