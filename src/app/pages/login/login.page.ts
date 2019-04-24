import { Component, OnInit } from '@angular/core';
import { AduanService } from 'src/app/services/aduan.service';
import { NavController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  user: {username: string, password: string}

  constructor(
    public aduanService: AduanService,
    public navCtrl: NavController,
    public alertController: AlertController
    ) { 
    this.user = {username: null, password: null}
  }

  login(){
    this.aduanService.doLogin(this.user).then(res => {
      //successful login, navigate to home page
      this.navCtrl.navigateRoot('/home', {animated: true});
    }).catch(err => {
      console.log(err);
      this.presentAlert('Invalid username or password');
      //login failed, present alert invalid username or password.
    })
  }

  async presentAlert(alertMessage: any) {
    const alert = await this.alertController.create({
      header: 'Alert',
      message: alertMessage,
      buttons: ['OK']
    });
    await alert.present();
  }

  ngOnInit() {
  }

}
