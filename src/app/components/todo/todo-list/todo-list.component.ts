import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { TodoService } from '../todo.service';
import { TodoModel } from '../todo.model';
import { DialogService } from '../../../core/dialog.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.less'],
  encapsulation: ViewEncapsulation.None
})

export class TodoListComponent implements OnInit {
     public tasks: TodoModel[];
     public displayedColumns: string[];
     public panelOpenState: boolean;
     public wantDelete: boolean;

  constructor(
     // tslint:disable-next-line:variable-name
     private _todoSrv: TodoService,
// tslint:disable-next-line: variable-name
     private _dialogSrv: DialogService
  ) { }

  ngOnInit() {
    this.panelOpenState = false;
    this.wantDelete = false;
    this.getTaks();
  }

  public getTaks() {
   this.tasks = this._todoSrv.getTodoTasks();
  }

  public deleteTask(id) {
    const modalIcon = 'warning';
    const modalTitle = 'Are you sure you wan´t to delete this task ?';
    this._dialogSrv.openDialog(modalIcon, modalTitle);
    this._dialogSrv.dialogRef.afterClosed().subscribe(
     result => {
       console.log( result);
       if (result) {
        this.wantDelete = result;
        this._todoSrv.deleteTask(id);
        this.getTaks();
        console.log('id eliminada ', id);
       } else {
        this.wantDelete = false;
       }
     });
  }



}
