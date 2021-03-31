import { Component, OnInit } from '@angular/core';
import { ImageService } from '../service/image.service';
import { Image } from '../model/image';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.scss']
})
export class ImagesComponent implements OnInit {
  images: Image[];

  constructor(private service: ImageService) { }

  ngOnInit(): void {
    this.getImages();
  }

  getImages(): void {
    this.service.getImages().subscribe((data: Image[]) => {
      this.images = data;
    });
  }
}
