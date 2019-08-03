import { Component, OnInit, Input, AfterViewInit, Output } from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import { EventEmitter } from 'events';
import { TableService } from './table.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.less']
})
export class TableComponent implements OnInit, AfterViewInit {
   @Input() dataTable;
   @Input() url: string;
   @Input() columnHeader: any[];
   // @Output() rowData: new EventEmitter<any>();

   public dataSource: MatTableDataSource<any>;
   public displayedColums;

   // @ todo!! pasar todos los inputs a un modelo config
  //  @Input() isSortable: boolean;
  //  @Input() showActions: boolean;
  //  @Input() isExpandable: boolean;
  // @Input() hasCheckbox: boolean;
  // @Input() hasRadioButton: boolean;
 

  constructor(
    private tableSrv: TableService
  ) {

   }

  ngOnInit() {
  this.checkBasicConfig();
  }

  ngAfterViewInit() {}
  

  public checkBasicConfig() {
      this.tableSrv.getData(this.url).subscribe(response => {
        if (response) {
          this.dataTable = response;
          this.dataSource = new MatTableDataSource(this.dataTable);
          console.log('esta es el objeto dataSource', this.dataSource);
        } else {
          console.log('sin respuesta');
        }
      });
      if (this.columnHeader) {
      this.displayedColums = this.columnHeader;
      console.log('columnas ', this.displayedColums);
      console.log('columnas ', this.displayedColums.length);
    } else {
      console.log('no hay columnas configuradas');
    }
  }

    public onRowClicked(row) {
      console.log('Row clicked: ', row);
    }

    public doFilter = (value: string) => {
      this.dataSource.filter = value.trim().toLocaleLowerCase();
    }
}
