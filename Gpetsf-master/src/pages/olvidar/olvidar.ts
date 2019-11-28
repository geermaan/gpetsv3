import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from "../../models/user";
import { ToastController } from 'ionic-angular';

/**
 * Generated class for the OlvidarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-olvidar',
  templateUrl: 'olvidar.html',
})
export class OlvidarPage {
  user = {} as User;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OlvidarPage');
  }
  presentToast() {
    let toast = this.toastCtrl.create({
      message: 'Enviando instrucciones de restablecimiento de contraseña via correo electronico',
      duration: 10000
    });
    toast.present();
  }

}
