import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import firebase from 'firebase';

declare var google;

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  /*title = "Find your pet!";
  lat: number;
  lng: number;*/
  map:any;
  latitude:number = 24.0453;
  longitude:number = -104.6168;
  coordenadas:any;
  latlng:any;
  pets = {
    lat: '24.0203209',
    lon: '-104.6575623' 
  }; 
  

  @ViewChild('map') mapElement: ElementRef;
  constructor(public navCtrl: NavController,
              public viewCtrl: ViewController,
              public database: AngularFireDatabase) {

             // this.coordenadas = firebase.database().ref('/coords');
              
            
                // this.getData();
              
              }
    getData(){



      this.database.list('coords/').valueChanges().subscribe(
        data => {
          var output = {
            lat: data[0],
            lon: data[1]
          }

          console.log("adentro");
          this.pets.lat = JSON.stringify(output.lat);
          this.pets.lon = JSON.stringify(output.lon);
          console.log(output);
        });

        
    }

    showData(){
      console.log(this.pets);
      console.log(parseFloat(this.pets.lat))
      console.log( this.latitude)
      console.log(parseFloat(this.pets.lon))
      console.log(this.longitude)
      this.map=this.loadMap();
    }
     
    ionViewDidLoad(){
      this.getData();
      this.map=this.loadMap();

    }

     sleep(milliseconds) {
      var start = new Date().getTime();
      for (var i = 0; i < 1e7; i++) {
        if ((new Date().getTime() - start) > milliseconds){
          break;
        }
      }
    }
  
    loadMap(){
      
      console.log('loadMap');
      //const latLng = new googl
      console.log("pets array afuera");
      console.log(this.pets);
  
      var myLatLng = {lat: parseFloat(this.pets.lat), lng: parseFloat(this.pets.lon)};
     
     

      var map = new google.maps.Map(this.mapElement.nativeElement,{
        zoom:14,
        center:{ lat: parseFloat(this.pets.lat), lng: parseFloat(this.pets.lon)},
        disableDefaultUI: false,
        mapTypeControl: false,
        scaleControl:true,
        streetViewControl:true,
        fullscreenControl:false,
        zoomControl:true,
      });

      /*let posicion = this.coordenadas.childData;

      console.log("esto "+posicion);*/

      var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Aquí esta tu mascota'
      });
      marker.setMap(map);
      
      return map;
        
    }


    
    

 

 
}
