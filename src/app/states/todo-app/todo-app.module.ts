import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MaterialModule } from '../../core/material.module';
import { TodoInputComponent } from 'src/app/components/todo/todo-input/todo-input.component';
import { TodoListComponent } from 'src/app/components/todo/todo-list/todo-list.component';
import { TodoAppComponent } from './todo-app.component';
import { DialogComponent } from 'src/app/components/common/dialog/dialog.component';

const routes: Routes = [
 {path: '', component: TodoAppComponent }
 ];

@NgModule({
  declarations: [
      TodoInputComponent,
      TodoListComponent,
    //  DialogComponent,
      TodoAppComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes)
  ],
  exports : [
    TodoAppComponent
  ]
})
export class TodoAppModule { }
