import { Injectable } from '@angular/core';
import {MatDialog,  MatDialogRef} from '@angular/material';
import {DialogComponent } from '../components/common/dialog/dialog.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {
  public dialogRef: MatDialogRef<any>;

  constructor(
    // tslint:disable-next-line:variable-name
    public _dialogSrv: MatDialog
  ) {}


  public openDialog(dialogTitle: string) {
    this.dialogRef = this._dialogSrv.open(DialogComponent, {
      width: '500px',
      height: '400px',
      data: {
        title: dialogTitle
      }
    });
    this.dialogRef.afterClosed().subscribe(result => {
      console.log('After Closed >>> ', result);
    });
  }


  public closeDialog() {
     }

}