import { Injectable, OnInit } from '@angular/core';
import {TodoModel } from './todo.model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TodoService implements OnInit {
  private todoTasks: TodoModel[];
  private showProfile: boolean;

  constructor() {
    this.todoTasks = [
     new TodoModel( 0, 'Compra', 'Patatitas y jabón', 'Fri Jul 05 2019 00:00:00 GMT+0200', 'HouseHold' ),
     new TodoModel( 1, 'Lavadoras', 'Tender la ropa de Axel y poner la mia ', 'Fri Jul 05 2019 00:00:00 GMT+0200' , 'HouseHold' ),
     new TodoModel( 2, 'Pagar a Hacienda!!!', 'Pero ya!!!!!', 'Fri Jul 05 2019 00:00:00 GMT+0200', 'Work' ),
    ];
    this.showProfile = false;
  }


  ngOnInit() { }


 public getTodoTasks(): TodoModel[] {
   return this.todoTasks;
 }

 public addNewTask(id: number, text: string, description: string, date: string, category: any) {
    id  = this.setRandomId(3, 100);
    console.log('siguiente id ', id);
    const newTask = new TodoModel(id, text, description, date, category);
    this.todoTasks.push(newTask);
    console.log('nuevo array ', this.todoTasks);
    return newTask;
 }

 public setRandomId(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


 public deleteTask(id: number) {
  this.todoTasks = this.todoTasks.filter(task => task.id !== id);
  console.log('array con elemntos eliminados', this.todoTasks);
 }


 public getShowProfile(): boolean {
   return this.showProfile;
 }

  public setShowProfile(): void {
    this.showProfile = !this.showProfile;
  }

}
