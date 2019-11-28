import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TaskI } from '../../interfaces/task.interface';
import {  TodoProvider } from '../../providers/todo/todo';
import { DetailsPage } from '../details/details';


@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'


})
export class ContactPage implements OnInit {
  todos: TaskI[];
 details:any = DetailsPage;


  constructor(private todoService: TodoProvider,
              public navCtrl: NavController) {

  }
  ngOnInit() {
    this.todoService.getTodos().subscribe(res => {
      this.todos = res;
    });

  }
  gotoDetails(todo:string){
   this.navCtrl.push(DetailsPage),{'id':todo};
  }

}
