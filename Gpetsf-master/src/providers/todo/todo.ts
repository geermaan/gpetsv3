import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TaskI } from '../../interfaces/task.interface'

/*
  Generated class for the TodoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TodoProvider {

  private todosCollection: AngularFirestoreCollection<TaskI>;
  private todos: Observable<TaskI[]>;

  constructor(db: AngularFirestore) {
    console.log('Hello TodoProvider Provider');
    this.todosCollection = db.collection<TaskI>('todos');
    this.todos = this.todosCollection.snapshotChanges().pipe(map(
      actions => {
        return actions.map(a => {
          const data = a.payload.doc.data() as TaskI;
          const id = a.payload.doc.id;
          return {id, ...data};
        });
      }
    ));
  }
  getTodos() {
    return this.todos;
  }

  getTodo(id: string) {
    return this.todosCollection.doc<TaskI>(id).valueChanges();
  }

  updateTodo(todo: TaskI, id: string){
    return this.todosCollection.doc(id).update(todo);
  }

  addTodo(todo: TaskI){
    return this.todosCollection.add(todo);
  }

  removeTodo(id: string){
    return this.todosCollection.doc(id).delete();
  }


}
