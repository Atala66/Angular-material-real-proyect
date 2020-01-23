import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ImageGalleryService } from './image-gallery.service';
import { DialogService } from 'src/app/core/dialog.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.less']
})

export class ImageGalleryComponent implements OnInit {
  public images: any[];

  constructor(
    private imageGallerySrv: ImageGalleryService,
    // tslint:disable-next-line: variable-name
    private _routerSrv: Router,
    // tslint:disable-next-line: variable-name
    private _dialogSrv: DialogService
  ) { }

  ngOnInit() {
  this.showGallery();
  }

  // tslint:disable-next-line:align
  public showGallery() {
    const imagesGalleryUrl = '../../../assets/mocks/imagesResponse.json';
    this.imageGallerySrv.getImages(imagesGalleryUrl).subscribe(
      response => {
        this.images = response.images;
      }
    );
  }

  openModalDescription() {
    const cancelText = 'CANCEL';
    const confirmText = 'NAVIGATE';
    const modalTitle = 'Description';
    const modalIcon = 'warning';
    const modalContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    this._dialogSrv.openDialog(cancelText,confirmText,modalTitle, modalIcon, modalContent);
    this._dialogSrv.dialogRef.afterClosed().subscribe(
     result => {
       console.log( result);
       this.navigateToTesting();
     });
  }

  navigateToTesting() {
    this._routerSrv.navigate(['/testing-two']);
  }

}
