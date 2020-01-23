import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {MatDialog,  MatDialogRef} from '@angular/material';
import {DialogComponent } from '../components/common/dialog/dialog.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {
  public dialogRef: MatDialogRef<any>;
  public result: any;

  constructor(
    // tslint:disable-next-line:variable-name
    public _dialogSrv: MatDialog
  ) {}


  public openDialog(
    cancelText: string,
    confirmText: string,
    dialogIcon?: any,
    dialogTitle?: string,
    dialogContent?: string): Observable<any>  {
    this.dialogRef = this._dialogSrv.open(DialogComponent, {
      width: 'auto',
      height : 'auto',
      data: {
        cancelText : cancelText ? cancelText : '',
        confirmText : confirmText ? confirmText : '',
        icon: dialogIcon ? dialogIcon : '',
        title: dialogTitle ? dialogTitle : '',
        content: dialogContent ? dialogContent : '',
      }
    });
    return this.dialogRef.afterClosed();
  }
 }

