import { Component, OnInit, ViewChild } from '@angular/core';
import { TableService } from 'src/app/components/table/table.service';
import {MatPaginator, MatTableDataSource, MatSortModule } from '@angular/material';
import {SelectionModel} from '@angular/cdk/collections';

@Component({
  selector: 'app-table-view',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.less']
})
export class TableViewComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  public columns: string[] = [];
  public columnsCheckbox: any[] = [];
  dataSource: any;
  public data: any;
  public select: any;
  public url: string;
  public hasActions: boolean;
  // public selection: any;

  constructor(
    private tableSrv: TableService
  ) { }

  ngOnInit() {
    this.configTable();

  }

  public configTable() {
    this.columns = [ 'select', 'Id', 'Nombre', 'Apellido_1', 'Apellido_2',  'Nacionalidad', 'Edad'];
    this.columnsCheckbox = ['check'];
    console.log('input columnas, ', this.columns);
    this.url  = '../../../assets/mocks/users.json';
    this.tableSrv.getData(this.url).subscribe(response => {
     if (response) {
       this.data = response.data;

       this.dataSource = new MatTableDataSource(this.data);
      //  const initialSelection = [];
      //  const allowMultiSelect = true;
      //  this.selection = new SelectionModel<any>(allowMultiSelect, initialSelection);
     } else {
       console.log('sin respuesta');
     }

    });
  }



}
