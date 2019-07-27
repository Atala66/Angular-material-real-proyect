import { Component, OnInit, Inject, Output, EventEmitter } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.less']
})
export class DialogComponent implements OnInit {
   public title: string;
   public icon: any;
   public value: any;
  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) data: any
  ) {

   if (data) {
    this.title = data.title;
    this.icon = data.icon;
    }
   }

  ngOnInit() { }


  public continue(val) {
    this.dialogRef.close(val);
  }

  public cancel(val) {
    this.dialogRef.close(val);
  }
}
