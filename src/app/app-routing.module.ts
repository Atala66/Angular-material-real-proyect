import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
 // {path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: '', loadChildren: '../app/states/home/home.module#HomeModule', pathMatch: 'full'},
  { path: 'image-gallery', loadChildren: '../app/states/image-gallery/image-gallery.module#ImageGalleryModule'},
  { path: 'todo-app', loadChildren: '../app/states/todo-app/todo-app.module#TodoAppModule'},
  { path: 'testing', loadChildren: '../app/states/testing/testing.module#TestingModule'},
  { path: 'testing-two', loadChildren: '../app/states/testing-two/testing-two.module#TestingTwoModule'},
  { path: 'table-view', loadChildren: '../app/states/table-view/table-view.module#TableViewModule'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
