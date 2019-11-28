import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { RegistroPage } from '../pages/registro/registro';
import { DetailsPage } from '../pages/details/details';
import { OlvidarPage } from '../pages/olvidar/olvidar';
import { AngularFirestore } from 'angularfire2/firestore';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';7

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { TodoProvider } from '../providers/todo/todo';



//import { AgmCoreModule } from 'angular2-google-maps/core';

//import { GoogleMaps } from '@ionic-native/google-maps';



const  FIREBASE_CREDENTIALS = {
  apiKey: "AIzaSyARFZYlZKJldjq3zQSMWSbVzXnqxuz8fvo",
  authDomain: "pets-62c3d.firebaseapp.com",
  databaseURL: "https://pets-62c3d.firebaseio.com",
  projectId: "pets-62c3d",
  storageBucket: "pets-62c3d.appspot.com",
  messagingSenderId: "761311129576",

};

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    RegistroPage,
    DetailsPage,
    OlvidarPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
   /* AgmCoreModule.forRoot({
      apiKey: 'AIzaSyD1g2BMtTNkcxVMsB57W52hsBh1As8TWdc'
    }),*/
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CREDENTIALS),
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    RegistroPage,
    DetailsPage,
    OlvidarPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
   // GoogleMaps,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    TodoProvider,
    AngularFirestore
  ]
})
export class AppModule {}
