import { Component, OnInit } from '@angular/core';
import { TodoModel } from '../todo.model';
import {FormControl} from '@angular/forms';
import { TodoService } from '../todo.service';
import { DialogService } from '../../../core/dialog.service';
import { DialogComponent } from '../../common/dialog/dialog.component';


@Component({
  // tslint:disable-next-line:component-selector
  selector: 'todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.less']
})
export class TodoInputComponent implements OnInit {
  // string form vars
  public todoText: string;
  public todoDescription: string;
  public todoDate: string;
  // key for newTask object
  public selectedCategory: any;
   // value for newTask object
  public categorySelected: string;
  // ngModel for select
  public selected: any;

  public newTask: TodoModel;
  public showMe: boolean;
  public categories: FormControl;
  public categoriesList: any[];
  public isValidForm: boolean;
  public dialog: DialogComponent;

  constructor(
   // tslint:disable-next-line:variable-name
   private _todoSrv: TodoService,
// tslint:disable-next-line: variable-name
   private _dialogSrv: DialogService
  ) { }

  ngOnInit() {
    this.categories = new FormControl();
    this.categoriesList = this.getCategories();
    this.newTask =   { id: null, text : null, description: null,  date: null, selectedCategory: null };
    this.showMe = true;
  }


  public addTask(): void {
      // value category for object
     this.categorySelected = this.onSelectChange(this.selected);
     this.validateForm(this.todoText);
     if (this.isValidForm) {
      this.newTask = this._todoSrv.addNewTask(this.todoText, this.todoDescription,  this.todoDate, this.categorySelected);
     }
     console.log('newTask', this.newTask);
     this.emptyForm();
  }

  private validateForm(formField: any) {
    if ( formField === '' || formField === null || formField === undefined) {
      console.log(this.dialog);
      const dialogTitle = 'Task Name is Required';
      this._dialogSrv.openDialog(dialogTitle);
      this.isValidForm = false;
        } else {
          this.isValidForm = true;
        }
}

  public emptyForm() {
    this.todoText = '';
    this.todoDate = '';
    this.todoDescription = '';
    this.categorySelected = null;
  }


  public cancelTask(): void {
    this.emptyForm();
  }


  public onSelectChange(selected) {
    return selected;
  }

  public getCategories(): any[] {
    return [
      { labelValue: 'Work', value: 'work' },
      { labelValue: 'Household', value: 'household' },
      { labelValue: 'Family', value: 'family' },
      { labelValue: 'Friends', value: 'friends' },
      { labelValue: 'Shooping', value: 'shooping' },
      { labelValue: 'Trips', value: 'trips' },
    ];
  }



}
