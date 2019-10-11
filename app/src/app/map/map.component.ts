import { Component, OnInit } from '@angular/core';
// import { LoadScriptService } from '../services/load-script.service';
declare const L: any;
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  // constructor(private loadScript: LoadScriptService) { }
  constructor() { }

  ngOnInit() {
    // this.loadScript.load('leafletJs', 'leafletCss').then(data => {
    //   console.log('caricati' + data);
    // }).catch(error => console.log(error));

    this.initMap();
  }

  public initMap() {
    const map = L.map('map').setView([51.505, -0.09], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
  }
}
