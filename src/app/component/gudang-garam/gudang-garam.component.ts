import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as Leaflet from 'leaflet';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-gudang-garam',
  templateUrl: './gudang-garam.component.html',
  styleUrls: ['./gudang-garam.component.scss'],
})
export class GudangGaramComponent implements OnInit {
  title = 'Gudang Garam Way';
  map!: Leaflet.Map;

  filterMap: FormGroup;

  details: any;

  constructor(
    private apiService: ApiService,
    private formBuilder: FormBuilder
  ) {
    this.filterMap = this.formBuilder.group({
      place: ['', Validators.maxLength(200)],
      wayId: ['', Validators.maxLength(200)],
      lat: [-6.171429751286963, Validators.maxLength(200)],
      lon: [106.87614315, Validators.maxLength(200)],
    });
  }

  ngOnInit(): void {
    this.onSearchLatLong();

    let data = {
      radius: 10,
      lat: -6.171429751286963,
      lon: 106.87614315,
    };

    this.apiService.getOverpass(data).subscribe(({ elements }) => {
      console.log(elements);
    });
  }

  initMap(): void {
    this.removeMap();
    this.map = Leaflet.map('map', {
      center: [
        this.filterMap.get('lat')?.value,
        this.filterMap.get('lon')?.value,
      ],
      zoom: 18,
    });

    const tiles = Leaflet.tileLayer(
      'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      {
        maxZoom: 20,
        minZoom: 18,
        attribution:
          '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }
    );
    tiles.addTo(this.map);
  }

  onSearchPlace() {
    this.apiService.getPlace(this.filterMap.value).subscribe((res) => {
      if (res.length > 0) {
        this.details = res[0];
        console.log(this.details);

        this.filterMap.get('lat')?.setValue(this.details.lat);
        this.filterMap.get('lon')?.setValue(this.details.lon);
        this.initMap();
      } else this.details = null;
    });
  }

  onSearchLatLong() {
    this.apiService.getReverse(this.filterMap.value).subscribe({
      next: (res) => {
        const { address, osm_type, osm_id, place_id } = res;
        console.log(osm_type, osm_id, address);
        this.details = address;
        this.initMap();
      },
      error: (err) => {
        console.log(err);
        this.details = null;
      },
    });
  }

  onSearchWayId() {
    this.apiService.getByWayId(this.filterMap.value).subscribe((res) => {
      this.details = null;
      if (res.length > 0) {
        const { lat, lon, address } = res[0];
        this.filterMap.get('lat')?.setValue(lat || null);
        this.filterMap.get('lon')?.setValue(lon || null);

        this.details = address;
        this.initMap();
      } else this.details = null;
    });
  }

  removeMap() {
    if (this.map != undefined) this.map.remove();
  }
}
