import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  timer: any;
  img = ['f001.jpg', 'f002.jpg', 'f003.jpg', 'f004.jpg', 'f005.jpg', 'f006.jpg', 'f007.jpg', 'f008.jpg', 'f009.jpg', 'f010.jpg', 'f011.jpg', 'f012.jpg', 'f013.jpg', 'f014.jpg', 'f015.jpg', 'f016.jpg', 'f017.jpg', 'f018.jpg', 'f019.jpg', 'f020.jpg', 'f021.jpg', 'f022.jpg', 'f023.jpg', 'f024.jpg', 'f025.jpg', 'f026.jpg', 'f027.jpg', 'f028.jpg', 'f029.jpg', 'f030.jpg', 'f031.jpg'];
  bgStyle = {backgroundImage: 'url(../../assets/img/index/f001.jpg)'};
  bgImg = 1;

  constructor() { }

  ngOnInit() {
    this.timer = setInterval(() => {
      this.startBg();
    }, 5000);
  }

  startBg() {
    this.bgStyle = {backgroundImage: 'url(../../assets/img/index/'+this.img[++this.bgImg % this.img.length]+')'};
  }

  ngOnDestroy(){
    clearInterval(this.timer);
    this.timer=null;
  }
}
