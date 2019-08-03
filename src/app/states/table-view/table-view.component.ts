import { Component, OnInit, ViewChild } from '@angular/core';
import { TableService } from 'src/app/components/table/table.service';
import {MatPaginator, MatTableDataSource, MatSortModule } from '@angular/material';

@Component({
  selector: 'app-table-view',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.less']
})
export class TableViewComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  public columns: any;
  dataSource: any;
  public data: any;
  public url: string;

  constructor(
    private tableSrv: TableService
  ) { }

  ngOnInit() {
    this.configTable();

  }

  public configTable() {
    this.columns = [ 'Id', 'Nombre', 'Apellido_1', 'Apellido_2',  'Nacionalidad', 'Edad'];
    this.url  = '../../../assets/mocks/users.json';
    this.tableSrv.getData(this.url).subscribe(response => {
     if (response) {
       this.data = response;
       this.dataSource = new MatTableDataSource(this.data);
     } else {
       console.log('sin respuesta');
     }

    });
  }



}
