import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({ providedIn: 'root' })
export class MarkerServiceService {

  constructor(private httpClient: HttpClient) {}

  public getMarkers() {
    return this.httpClient.get('http://localhost:8001/api/getMarker');
  }
}
