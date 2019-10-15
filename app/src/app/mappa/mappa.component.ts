import { Component, NgZone, OnInit } from '@angular/core';
import { MarkerServiceService } from '../services/marker-service.service';
import * as L from 'leaflet';
import 'leaflet.markercluster';

@Component({
  selector: 'app-mappa',
  templateUrl: './mappa.component.html',
  styleUrls: ['./mappa.component.css']
})
export class MappaComponent implements OnInit {
  fitBounds: any = null;
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

  constructor(protected service: MarkerServiceService, protected zone: NgZone) { }

  ngOnInit() {
    this.service.getMarkers().subscribe(
      (data: L.Marker[]) => {
        this.getList(data);
      }
    );
  }

  // onMapReady(map: L.Map) {}

  markerClusterReady(group: L.MarkerClusterGroup) {
    this.markerClusterGroup = group;
  }


  getList(points: L.Marker[]) {
    const data: L.Marker[] = [];
    for (const point of points) {
      const latlng = L.latLng(parseFloat(point['y']), parseFloat(point['x']));
      const newMarker = L.marker(latlng, {
        icon: L.icon({
          iconSize: [ 25, 41 ],
          iconAnchor: [ 13, 41 ],
          iconUrl: 'leaflet/marker-icon.png',
          shadowUrl: 'leaflet/marker-shadow.png'
        })
      });
      data.push(newMarker);
    }
    this.markerClusterData = data;
  }

}
