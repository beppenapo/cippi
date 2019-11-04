import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  active: string;
  constructor(private translate: TranslateService) {
    translate.setDefaultLang('it');
  }

  ngOnInit() {
    this.active = 'it';
  }

  setLang(lang: string){
    this.active = lang;
    localStorage.setItem('lang', lang);
    this.translate.use(lang);
  }
  isActive(l: string) { return this.active === l; }


}
