import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.less']
})
export class DialogComponent implements OnInit {
   public title: string;
  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) data: any
  ) {

   if (data) {
    this.title = data.title;
      }

   }

  ngOnInit() {}


  public continue() {
    this.dialogRef.close();
  }

  public cancel() {
    this.dialogRef.close();
  }
}
