import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MaterialModule } from '../../core/material.module';
import { HeaderComponent } from 'src/app/components/common/header/header.component';
import { HomeComponent } from './home.component';




const routes: Routes = [
//  {path: '', component: HomeComponent }
 ];

@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes)
  ],
  exports : [
     HomeComponent
  ]
})
export class HomeModule { }
