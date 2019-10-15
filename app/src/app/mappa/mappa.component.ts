import { Component, OnInit } from '@angular/core';
import { MarkerServiceService } from '../services/marker-service.service';
import * as L from 'leaflet';
import 'leaflet.markercluster';

@Component({
  selector: 'app-mappa',
  templateUrl: './mappa.component.html',
  styleUrls: ['./mappa.component.css']
})
export class MappaComponent implements OnInit {
  base = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
    attribution: 'Open Street Map'
  });
  options = {
    layers: [this.base],
    zoom: 2,
    center: L.latLng([ 0, 0 ])
  };
  markerClusterGroup: L.MarkerClusterGroup;
  markerClusterData: L.Marker[] = [];
  markerClusterOptions: L.MarkerClusterGroupOptions;
  
  markers: L.Marker[] = [];

  constructor(protected service: MarkerServiceService) { }

  ngOnInit() {
    this.service.getMarkers().subscribe(
      (data: L.Marker[]) => {
        this.getList(data);
      }
    )
  }

  getList(points: L.Marker[]) {
    for (let i = 0; i < points.length; i++) {
      const latlng = L.latLng(parseFloat(points[i]['y']), parseFloat(points[i]['x']));
      const newMarker = L.marker(latlng, {
        icon: L.icon({
          iconSize: [ 25, 41 ],
          iconAnchor: [ 13, 41 ],
          iconUrl: 'leaflet/marker-icon.png',
          shadowUrl: 'leaflet/marker-shadow.png'
        })
      });
      this.markers.push(newMarker);
    }
  }

}
