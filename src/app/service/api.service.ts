import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  searchUrl = 'https://nominatim.openstreetmap.org/search';
  reverseUrl = 'https://nominatim.openstreetmap.org/reverse';
  lookUpUrl = 'https://nominatim.openstreetmap.org/lookup';
  overpassUrl = 'https://overpass-api.de/api/interpreter';
  // https://overpass-api.de/api/interpreter?data=[out:json];way(around:10,52.07530,5.13997);out;

  constructor(private httpClient: HttpClient) {}

  generateParams(): HttpParams {
    let params = new HttpParams();
    params = params.append('format', 'json');
    return params;
  }

  getPlace = (data: any): Observable<any> => {
    let params = this.generateParams();
    params = params.append('q', data.place);
    return this.httpClient.get(this.searchUrl, { params: params });
  };

  getReverse = (data: any): Observable<any> => {
    let params = this.generateParams();
    params = params.append('lat', data.lat);
    params = params.append('lon', data.lon);
    return this.httpClient.get(this.reverseUrl, { params: params });
  };

  getByWayId = (data: any): Observable<any> => {
    let params = this.generateParams();
    params = params.append('osm_ids', 'W' + data.wayId);
    return this.httpClient.get(this.lookUpUrl, { params: params });
  };

  getOverpass = (data: any): Observable<any> => {
    // https://overpass-api.de/api/interpreter?data=[out:json];way(around:10,52.07530,5.13997);out;
    return this.httpClient.get(
      this.overpassUrl +
        `wr(around:${data.radius},${data.lat},${data.lon});out;`
    );
  };

  getWayFromLatLong = (latLong: string): Observable<any> => {
    const query = `wr(poly:'${latLong}')`;
    const url = `${this.overpassUrl}?data=[out:json];${query};out center;`;
    console.log('%O', url);
    return this.httpClient.get(decodeURI(url));
  };

  //prettier-ignore
  getAmenityFromLatLong = (latLong: string, amenity: string): Observable<any> => {
    // let name;
    // if (amenity === 'hospital') name = 'rumah sakit';
    // else if (amenity === 'cafe') name = 'kopi';
    const query = `wr[amenity=${amenity}](poly:'${latLong}')`;
    const url = `${this.overpassUrl}?data=[out:json];${query};out center;`;
    console.log('%O', url);
    return this.httpClient.get(decodeURI(url));
  };

  getStreetFromLatLong = (latLong: string): Observable<any> => {
    const query = `wr[highway](poly:'${latLong}')`;
    const url = `${this.overpassUrl}?data=[out:json];${query};out center;`;
    console.log('%O', url);
    return this.httpClient.get(decodeURI(url));
  };
}
