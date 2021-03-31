import { Component, OnInit } from '@angular/core';
import { ImageService } from '../service/image.service';
import { Image } from '../model/image';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.scss']
})
export class ImagesComponent implements OnInit {
  images: Image[] = [];
  isLoading: boolean;

  constructor(private service: ImageService) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.getImages();
  }

  /**
   * Gets 30 images at once and repeats 333 times
   */
  getImages(): void {
    this.service.getImages().subscribe((data: Image[]) => {
      for (var i = 0; i < 333; i++) {
        this.images.push(...data);
      }
      if (i === 333) {
        this.isLoading = false;
      }
    });
  }
}
