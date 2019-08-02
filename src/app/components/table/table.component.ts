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

   public dataSource;

   // @ todo!! pasar todos los inputs a un modelo config
  //  @Input() isSortable: boolean;
  //  @Input() showActions: boolean;
  //  @Input() isExpandable: boolean;
  // @Input() hasCheckbox: boolean;
  // @Input() hasRadioButton: boolean;
 

  constructor() {

   }

  ngOnInit() {
    this.dataTable = new MatTableDataSource(this.dataTable);
    console.log('llena fuente datos ', this.dataTable.data);
  }
  

  public configColumns() {

  }
}
