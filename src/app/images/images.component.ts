import { Component, OnInit } from '@angular/core';
import { ImageService } from '../service/image.service';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.sass']
})
export class ImagesComponent implements OnInit {

  constructor(private service: ImageService) { }

  ngOnInit(): void {
    this.getImages();
  }

  getImages(): void {
    this.service.getImages().subscribe((data) => {
      console.log(data);
    });
  }
}
