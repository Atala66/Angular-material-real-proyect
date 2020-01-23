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
   public content: string;
   public icon: any;
   public cancelText: string;
   public confirmText: string;
   public value: any;
  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) data: any
  ) {

   if (data) {
    this.title = data.title;
    this.content = data.content;
    this.icon = data.icon;
    this.cancelText = data.cancelText;
    this.confirmText = data.confirmText;
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
