import { Injectable } from '@angular/core';
import {TodoModel } from './todo.model';


@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private todoTasks: TodoModel[];
  private nextIndex: number;
  private showProfile: boolean;

  constructor() {
    this.todoTasks = [
     new TodoModel( 0, 'Compra', 'Patatitas y jabón', 'Fri Jul 05 2019 00:00:00 GMT+0200', 'HouseHold' ),
     new TodoModel( 1, 'Lavadoras', 'Tender la ropa de Axel y poner la mia ', 'Fri Jul 05 2019 00:00:00 GMT+0200' , 'HouseHold' ),
     new TodoModel( 2, 'Pagar a Hacienda!!!', 'Pero ya!!!!!', 'Fri Jul 05 2019 00:00:00 GMT+0200', 'Work' ),
    ];
    this.nextIndex = 3;
    this.showProfile = false;
  }


 public getTodoTasks(): TodoModel[] {
   return this.todoTasks;
 }

 public addNewTask(text: string, description: string, date: string, category: any) {
    const newTask = new TodoModel(this.nextIndex, text, description, date, category);
    this.todoTasks.push(newTask);
    this.nextIndex ++;
    return newTask;
 }

 public deleteTask(id: number) {
  this.todoTasks.splice(id, 1);
  console.log('array con elemntos eliminados', this.todoTasks);
  return this.todoTasks;
 }


 public getShowProfile(): boolean {
   return this.showProfile;
 }

  public setShowProfile(): void {
    this.showProfile = !this.showProfile;
  }
}
