import { Component, OnInit, Input } from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.less']
})
export class TableComponent implements OnInit {
   @Input() dataTable;
   @Input() columnHeader: any[];

   public dataSource: MatTableDataSource<any>;
   public displayedColums;

   // @ todo!! pasar todos los inputs a un modelo config
  //  @Input() isSortable: boolean;
  //  @Input() showActions: boolean;
  //  @Input() isExpandable: boolean;
  // @Input() hasCheckbox: boolean;
  // @Input() hasRadioButton: boolean;
 

  constructor() {

   }

  ngOnInit() {
  this.checkBasicConfig();
  }
  

  public checkBasicConfig() {
    if(this.dataTable) {
      this.dataSource = new MatTableDataSource<any>(this.dataTable);
      console.log('dataSource ', this.dataSource);
    } else {
      console.log('no hay datos que pintar');
    }

    if(this.columnHeader) {
      this.displayedColums = this.columnHeader;
      console.log('columnas ', this.displayedColums);
      console.log('columnas ', this.displayedColums.length);
    } else {
      console.log('no hay columnas configuradas');
    }

  }
}
