import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { User } from "../..//models/user";
import { AngularFireAuth } from 'angularfire2/auth';
import { HomePage } from '../home/home';

/**
 * Generated class for the RegistroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registro',
  templateUrl: 'registro.html',
})
export class RegistroPage {

  user = {} as User;
  logi:any = HomePage;

  constructor(private afAuth: AngularFireAuth,
              public navCtrl: NavController, 
              public navParams: NavParams,
              public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistroPage');
  }

  async login(user: User) {
    try {
        const result = await this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password)
        .then((user) => {
        if (user.emailVerified) {
          this.navCtrl.setRoot(HomePage);
        }  else{
        }
        });
    }
     
    catch (e) {
      console.error(e);
    }
  }
 
  async register(user: User) {

   // user.email = this.uni.concat(user.email, this.uni)
    console.log(user.email);
    try {
      if (user.password == user.password2){
      const result = await this.afAuth.auth.createUserWithEmailAndPassword(
        user.email,
        user.password
      ).then((res)=>{
        this.sendEmailVerification()
      });
      if (result) {
        this.navCtrl.setRoot(HomePage);
      }
      } else {
        let alert = this.alertCtrl.create({
          title: 'Las contraseñas deben de coincidir',
          buttons: ['OK']
        }); 
        alert.present();
      }

    } catch (e) {
      console.error(e);
    }
 
  }
  sendEmailVerification(){
    this.afAuth.authState.subscribe(user => {
      user.sendEmailVerification()
      .then(() => {
        console.log('email sent');
        let alert = this.alertCtrl.create({
          title: 'Aviso!',
          subTitle: 'Verifica tu correo para completar tu registro',
          buttons: ['OK']
        });
        alert.present();
      })
    });
  }

}
