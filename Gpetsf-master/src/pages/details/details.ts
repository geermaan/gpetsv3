import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TaskI } from '../../interfaces/task.interface';
import { TodoProvider } from '../../providers/todo/todo';
import { HomePage } from '../home/home';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';

/**
 * Generated class for the DetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class DetailsPage implements OnInit {
  todo: TaskI = {
    task: '',
    priority: ''
  };
  todoId:any =[];

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private todoService: TodoProvider) {
      this.todoId = navParams.get('id');
     console.log("constructor: "+this.todoId);
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailsPage');
    this.todoId = this.navParams.get('id');
    console.log("ionview: "+this.todoId);
  }
  ngOnInit() {
    this.todoId = this.navParams.get('id');
    console.log(this.todoId);
    if (this.todoId) {
      console.log(this.todoId);
      this.loadTodo();
    }
  }
  async loadTodo(){
    //const loading = await this.loadingController.create({
      //message: 'Loading....'
    //});
    //await loading.present();

    this.todoService.getTodo(this.todoId).subscribe(todo => {
      //loading.dismiss();
      this.todo = todo;
      console.log("Aqui si:"+this.todo)
    });
  }

  async saveTodo() {
    //const loading = await this.loadingController.create({
    //  message: 'Saving....'
    //});
    //await loading.present();
 
    if (this.todoId) {
      this.todoService.updateTodo(this.todo, this.todoId).then(() => {
        //loading.dismiss();
        this.navCtrl.push(ContactPage,{"id":this.todoId})
        //this.nav.navigateForward('/');
      });
    } else {
      this.todoService.addTodo(this.todo).then(() => {
        //loading.dismiss();
        this.navCtrl.push(ContactPage,{"id":this.todoId})
        //this.nav.navigateForward('/');
      });
    }
  }
  async onRemoveTodo(idTodo:string) {
    this.todoService.removeTodo(idTodo);
  }


}
