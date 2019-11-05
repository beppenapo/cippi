import { Injectable } from '@angular/core';
import { Image } from '../models/image';

@Injectable({ providedIn: 'root' })
export class ImageService {
  images: Image[];
  getImages() { return this.images = imgArr.slice(0); }
  constructor() { }
}

const imgArr = [
  {id: 1, name: 'f001.jpg'},
  {id: 2, name: 'f002.jpg'},
  {id: 3, name: 'f003.jpg'},
  {id: 4, name: 'f004.jpg'},
  {id: 5, name: 'f005.jpg'},
  {id: 6, name: 'f006.jpg'},
  {id: 7, name: 'f007.jpg'},
  {id: 8, name: 'f008.jpg'},
  {id: 9, name: 'f009.jpg'},
  {id: 10, name: 'f010.jpg'},
  {id: 11, name: 'f011.jpg'},
  {id: 12, name: 'f012.jpg'},
  {id: 13, name: 'f013.jpg'},
  {id: 14, name: 'f014.jpg'},
  {id: 15, name: 'f015.jpg'},
  {id: 16, name: 'f016.jpg'},
  {id: 17, name: 'f017.jpg'},
  {id: 18, name: 'f018.jpg'},
  {id: 19, name: 'f019.jpg'},
  {id: 20, name: 'f020.jpg'},
  {id: 21, name: 'f021.jpg'},
  {id: 22, name: 'f022.jpg'},
  {id: 23, name: 'f023.jpg'},
  {id: 24, name: 'f024.jpg'},
  {id: 25, name: 'f025.jpg'},
  {id: 26, name: 'f026.jpg'},
  {id: 27, name: 'f027.jpg'},
  {id: 28, name: 'f028.jpg'},
  {id: 29, name: 'f029.jpg'},
  {id: 30, name: 'f030.jpg'},
  {id: 31, name: 'f031.jpg'},
];
