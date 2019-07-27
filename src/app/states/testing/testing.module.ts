import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { TestingComponent } from './testing.component';

const routes: Routes = [
  {path: '', component: TestingComponent }
];

@NgModule({
  declarations: [
    TestingComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
})
export class TestingModule { }
