import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { TableViewComponent } from './table-view.component';
import { MaterialModule } from 'src/app/core/material.module';
import { TableComponent } from 'src/app/components/table/table.component';

const routes: Routes = [
  {path: '', component: TableViewComponent }
];

@NgModule({
  declarations: [
    TableViewComponent,
    TableComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes)
  ],
})
export class TableViewModule { }
