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


  public openDialog(dialogTitle?: string, dialogIcon?: any): Observable<any>  {
    this.dialogRef = this._dialogSrv.open(DialogComponent, {
      width: '500px',
      height: '250px',
      data: {
        title: dialogTitle ? dialogTitle : '',
        icon: dialogIcon ? dialogIcon : ''
      }
    });
    return this.dialogRef.afterClosed();
  }
 }

