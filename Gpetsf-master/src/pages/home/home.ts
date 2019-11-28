import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { User } from "../../models/user";
import { AngularFireAuth } from 'angularfire2/auth';
import { AboutPage } from '../about/about';
import { RegistroPage } from '../registro/registro'; 
import { ContactPage } from '../contact/contact';
import { DetailsPage } from '../details/details';
import { OlvidarPage } from '../olvidar/olvidar';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  user = {} as User
  registro:any = RegistroPage;
  contact:any = ContactPage;
  details:any = DetailsPage;
  olvidar:any =OlvidarPage;

  constructor(private afAuth: AngularFireAuth, 
              public navCtrl: NavController,
              public alertCtrl: AlertController) {

  }

  async login(user: User) {
    try {
      
      const result = await this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password)
      .then((user) => {
      if (user.emailVerified) {
        this.navCtrl.setRoot(AboutPage);
      }  else{
      }
      });
    }
    catch (e) {
      console.error(e);
      let alert = this.alertCtrl.create({
        title: 'Registro o contraseña incorrecta',
        buttons: ['OK']
      }); 
      alert.present();
    }
  }
 
  sendEmailVerification(){
    this.afAuth.authState.subscribe(user => {
      user.sendEmailVerification()
      .then(() => {
        console.log('email sent');
      })
    });
  }

  gotoMap(){
    this.navCtrl.push(AboutPage);
  }
}
