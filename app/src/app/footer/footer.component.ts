import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  active: string;
  constructor() { }

  ngOnInit() {
    this.active = 'it';
  }

  setLang(lang: string){
    this.active = lang;
    localStorage.setItem('lang', lang);
  }
  isActive(l: string) { return this.active === l; }


}
