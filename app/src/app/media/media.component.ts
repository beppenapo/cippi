import { Component, OnInit } from '@angular/core';
import { Image } from '../models/image';
import { ImageService } from '../services/image.service';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.css']
})
export class MediaComponent implements OnInit {
  images: Image[] = [];
  constructor(imageService: ImageService) {
    this.images = imageService.getImages();
  }

  ngOnInit() { }

}
