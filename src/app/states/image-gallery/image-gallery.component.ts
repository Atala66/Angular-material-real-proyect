import { Component, OnInit } from '@angular/core';
import { ImageGalleryService } from './image-gallery.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.less']
})

export class ImageGalleryComponent implements OnInit {
  public images: any[];

  constructor(
    private imageGallerySrv: ImageGalleryService
  ) { }

  ngOnInit() {
  this.showGallery();
  }

  // tslint:disable-next-line:align
  public showGallery() {
    const imagesGalleryUrl = '../../../assets/mocks/imagesResponse.json';
    this.imageGallerySrv.getImages(imagesGalleryUrl).subscribe(
      response => {
        console.log(response);
        this.images = response.images;
      }
    );
  }

}
