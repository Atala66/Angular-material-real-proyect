import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { TestingTwoComponent } from './testing-two.component';

const routes: Routes = [
  {path: '', component: TestingTwoComponent }
];

@NgModule({
  declarations: [
    TestingTwoComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
})
export class TestingTwoModule { }
