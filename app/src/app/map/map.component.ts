import { Component, OnInit } from '@angular/core';
import { MarkerServiceService } from '../services/marker-service.service';
import { Marker } from '../models/marker';

declare const L: any;
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  markers: Marker[] = [];
  constructor(protected markerService: MarkerServiceService) { }

  ngOnInit() {
    this.getMarker();
    this.initMap();
  }

  public initMap() {
    console.log(this.markers);
    const map = L.map('map').setView([0, 0], 2);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
  }

  public getMarker() {
    this.markerService.getMarkers().subscribe(
      response => {
        if (response) {
          console.log(response);
        }
      }
    );
  }
}
