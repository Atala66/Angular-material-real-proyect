import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ImageGalleryComponent } from './image-gallery.component';
import { MaterialModule } from 'src/app/core/material.module';

const routes: Routes = [
  {path: '', component: ImageGalleryComponent }
];

@NgModule({
  declarations: [
    ImageGalleryComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes)
  ],
})
export class ImageGalleryModule { }
