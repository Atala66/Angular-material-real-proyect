import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatInputModule, MatButtonModule, MatSelectModule, MatIconModule, MatSidenavModule } from '@angular/material';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatDatepickerModule, MatNativeDateModule } from '@angular/material';
import {MatListModule} from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatTableModule} from '@angular/material/table';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatDialogModule} from '@angular/material/dialog';
import {MatMenuModule} from '@angular/material/menu';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {CdkTableModule} from '@angular/cdk/table';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    MatToolbarModule,
    MatInputModule,
    MatButtonModule,
    MatButtonModule,
    MatSelectModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatListModule,
    MatGridListModule,
    MatTableModule,
    MatExpansionModule,
    MatDialogModule,
    MatSidenavModule,
    MatMenuModule,
    MatPaginatorModule,
    MatSortModule,
    CdkTableModule
  ],
  declarations: [ ],
  providers: [
    MatDatepickerModule,
    MatNativeDateModule
  ],
  exports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    MatToolbarModule,
    MatInputModule,
    MatButtonModule,
    MatButtonModule,
    MatSelectModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatListModule,
    MatGridListModule,
    MatTableModule,
    MatExpansionModule,
    MatDialogModule,
    MatSidenavModule,
    MatMenuModule,
    CdkTableModule
   ]
})
export class MaterialModule {

}

