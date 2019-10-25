import { Component, OnInit, NgZone } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { MarkerServiceService } from '../services/marker-service.service';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
declare let L: any;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
  animations: [
    trigger('slidePanel', [
      state('closed', style({ right: '-100%', display: 'none' })),
      state('open', style({ right: '0', display: 'block' })),
      transition('closed<=>open', [animate('300ms')])
    ])
  ]
})
export class MapComponent implements OnInit {
  currentState = 'closed';
  faTimes = faTimes;
  mapOptions = { minZoom: 10, maxZoom: 22 };
  cippo: any[] = [];
  outdoors = L.tileLayer('https://{s}.tile.thunderforest.com/outdoors/{z}/{x}/{y}.png?apikey={apikey}', {
    attribution: '&copy; <a href="http://www.thunderforest.com/">Thunderforest</a>, &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    apikey: '5158726f18294b008b9d80513ec3db9a',
    maxZoom: 22
  });
  opencycle = L.tileLayer('https://{s}.tile.thunderforest.com/cycle/{z}/{x}/{y}.png?apikey={apikey}', {
    attribution: '&copy; <a href="http://www.thunderforest.com/">Thunderforest</a>, &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    apikey: '5158726f18294b008b9d80513ec3db9a',
    maxZoom: 22
  });
  markers = L.layerGroup();

  constructor(protected service: MarkerServiceService, protected zone: NgZone) { }

  ngOnInit() {
    this.service.getMarkers().subscribe(
      (data: any[]) => {
        this.initMap(data);
      }
    );
  }

  changeState(s: any) { this.currentState = s; }

  initMap(points: any[]) {
    const map = L.map('map', this.mapOptions);
    const bounds = L.latLngBounds();
    this.outdoors.addTo(map);

    const baseMaps = {
      'Outdoors track': this.outdoors,
      'Cycle track': this.opencycle
    };
    L.control.layers(baseMaps, null, {collapsed: false}).addTo(map);
    L.control.scale({imperial: false, metric: true}).addTo(map);

    for (const point of points) {
      const latlng = L.latLng(parseFloat(point['y']), parseFloat(point['x']));
      L.marker(latlng, {
        icon: L.icon({
          iconSize: [ 25, 41 ],
          iconAnchor: [ 13, 41 ],
          iconUrl: 'leaflet/marker-icon.png',
          shadowUrl: 'leaflet/marker-shadow.png'
        })
      })
      .addTo(this.markers)
      .on('click', () => { this.showPanel(point); });
      bounds.extend(latlng);
    }
    this.markers.addTo(map);
    map.fitBounds(bounds);

    const resetMap = L.Control.extend({
      options: { position: 'topleft'},
      onAdd() {
        const container = L.DomUtil.create('div', 'extentControl leaflet-bar leaflet-control leaflet-touch');
        const btn = L.DomUtil.create('a');
        btn.setAttribute('style', 'background: #fff; background-image: url("../../assets/globo.jpg"); background-repeat: no-repeat; background-position: center center;');
        btn.setAttribute('id', 'zoomMax');
        btn.setAttribute('title', 'zoomMax');
        container.appendChild(btn);
        return container;
      }
    });
    map.addControl(new resetMap());

    const zoomMaxBtn = document.getElementById('zoomMax');
    const fullZoom = () => { map.fitBounds(bounds); };

    zoomMaxBtn.addEventListener('click', fullZoom);

    document.querySelector('.leaflet-left').setAttribute('style', 'left:80px !important');
  }

  showPanel(point: any[]) {
    console.log(point);
    this.cippo = point;
    this.zone.run(() => {
      this.changeState('open');
    });
  }


}
