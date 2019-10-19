import { Component, OnInit } from '@angular/core';
import { MarkerServiceService } from '../services/marker-service.service';
import { faHome } from '@fortawesome/free-solid-svg-icons';
declare let L: any;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  faHome = faHome;
  baseLayer = L.tileLayer('https://{s}.tile.thunderforest.com/outdoors/{z}/{x}/{y}.png?apikey={apikey}', {
    attribution: '&copy; <a href="http://www.thunderforest.com/">Thunderforest</a>, &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    apikey: '5158726f18294b008b9d80513ec3db9a',
    maxZoom: 18
  });
  markers = L.layerGroup();

  constructor(protected service: MarkerServiceService) { }

  ngOnInit() {
    this.service.getMarkers().subscribe(
      (data: any[]) => {
        this.initMap(data);
      }
    );
  }

  initMap(points: any[]) {
    const map = L.map('map');
    const bounds = L.latLngBounds();
    this.baseLayer.addTo(map);

    for (const point of points) {
      const latlng = L.latLng(parseFloat(point['y']), parseFloat(point['x']));
      L.marker(latlng, {
        icon: L.icon({
          iconSize: [ 25, 41 ],
          iconAnchor: [ 13, 41 ],
          iconUrl: 'leaflet/marker-icon.png',
          shadowUrl: 'leaflet/marker-shadow.png'
        })
      }).addTo(this.markers);
      bounds.extend(latlng);
    }
    this.markers.addTo(map);
    map.fitBounds(bounds);

    const resetMap = L.Control.extend({
      options: { position: 'topleft'},
      onAdd() {
        // const btn = document.createElement('a');
        // btn.classList.add('firstZoom');
        const container = L.DomUtil.create('div', 'extentControl leaflet-bar leaflet-control leaflet-touch');
        const btn = L.DomUtil.create('a');
        const span = L.DomUtil.create('span', 'firstZoom');
        btn.appendChild(span);
        container.appendChild(btn);
        // btn = $("<a/>", {href: '#'}).appendTo(container);
        // $("<i/>",{class:'fas fa-home'}).appendTo(btn)
        // btn.on('click', function (e) {
        //   e.preventDefault()
        //   map.fitBounds(cluster.getBounds());
        // });
        return container;
      }
    });

    map.addControl(new resetMap());
  }
}
