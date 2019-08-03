import { Component, OnInit, Input, AfterViewInit,ViewChild, Output } from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import {MatSort} from '@angular/material/sort';
import { EventEmitter } from 'events';
import { TableService } from './table.service';
import {SelectionModel} from '@angular/cdk/collections';
import { ThrowStmt } from '@angular/compiler';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.less']
})
export class TableComponent implements OnInit, AfterViewInit {
   @Input() dataTable;
   @Input() url: string;
   @Input() columnHeader: any[];
   @Input() columnCheckbox: any[];
   @ViewChild(MatSort) sort: MatSort;

   // @Output() rowData: new EventEmitter<any>();

   public dataSource: MatTableDataSource<any>;
   public displayedColums;
   public selection;
   public data = [];
   public actions = [];
   // tslint:disable-next-line:ban-types

   // @ todo!! pasar todos los inputs a un modelo config
  //  @Input() isSortable: boolean;
    @Input() hasActions?: boolean;
  //  @Input() isExpandable: boolean;
  // @Input() hasCheckbox: boolean;
  // @Input() hasRadioButton: boolean;
 

  constructor(
    private tableSrv: TableService
  ) {

   }

  ngOnInit() {
  this.configColumns();
  this.fetchData();
  }

  ngAfterViewInit() {}
  

  public fetchData() {
    this.tableSrv.getData(this.url).subscribe(response => {
      if (response) {
          this.data = response.data;
          this.data.forEach((row) => {
             console.log( row);
          });
          this.dataSource = new MatTableDataSource(this.data);
          console.log('esta es el objeto dataSource', this.dataSource);
      } else {
        console.log('sin respuesta');
      }
      this.dataSource.sort = this.sort;
    });
 

  }

  public configColumns() {
      if (this.columnHeader) {
      this.displayedColums = this.columnHeader;
      console.log('displayed columns finales', this.displayedColums);
      if( this.columnCheckbox) {
        const allowMultiSelect = true;
        const check = new SelectionModel<any>(allowMultiSelect);
        this.columnCheckbox.push(check);
        this.selection = new SelectionModel<any>(allowMultiSelect);
      }
    } else {
      console.log('no hay columnas configuradas');
    }

  }

    public onRowClicked(row) {
      console.log('Row clicked: ', row);
    }

    public applyFilter = (value: string) => {
      this.dataSource.filter = value.trim().toLowerCase();
    }


      /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: any): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }
 
}
