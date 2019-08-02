import { Component, OnInit } from '@angular/core';
import { TableService } from 'src/app/components/table/table.service';
import {MatPaginator, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-table-view',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.less']
})
export class TableViewComponent implements OnInit {
  public columns: any;
  dataSource: any;

  constructor(
    private tableSrv: TableService
  ) { }

  ngOnInit() {
    this.configTable();
  }

  public configTable() {
    // this.configColumns();
    // this.getUsers();
    this.columns = [ 'Id', 'Nombre', 'Apellidos', 'Nacionalidad', 'Edad'];
    const url  = '../../../assets/mocks/users.json';
    this.tableSrv.getData(url).subscribe(response => {
     if (response) {
       this.dataSource = response;
       console.log('esta es la fuente de datos', this.dataSource);

     } else {
       console.log('sin respuesta');
     }

    });
  }

  // public getUsers() {
  //   const url  = '../../../assets/mocks/users.json';
  //   this.tableSrv.getData(url).subscribe(response => {
  //    if (response) {
  //      this.dataSource = response;
  //      console.log('esta es la fuente de datos', this.dataSource);

  //    } else {
  //      console.log('sin respuesta');
  //    }

  //   });
  // }


  // public configColumns() {
  //   this.columns = [ 'Id', 'Nombre', 'Apellidos', 'Nacionalidad', 'Edad'];
  //  }
}
