import { Component } from '@angular/core';
import 'leaflet-draw';
import { ApiService } from 'src/app/service/api.service';
import { Menu } from './../../interface/menu';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent {
  menu = {} as Menu;
  listMenu: Menu[] = [];

  constructor(private apiService: ApiService) {}

  getMenu() {
    this.menu = {};
    const menu1 = {} as Menu; // !parent || parent === 0;
    const menu2 = {} as Menu; // parent === 1
    const menu3 = {} as Menu; // parent === 2

    this.menu.label = 'All';
    this.menu.icon = 'pi pi-fw pi-check-square';
    this.menu.routerLink = ['/'];
  }

  // title = 'Gudang Garam Way';
  // isLoading: boolean = false;

  // map!: Leaflet.Map;
  // filterMap: FormGroup;
  // details: any[] = [];

  // overpassParams: any = '';

  // listOption = ['all', 'cafe', 'restaurant', 'hospital', 'street'];
  // selectedOption: string = this.listOption[0];

  // markerGroup: Leaflet.LayerGroup = new Leaflet.LayerGroup();

  // ngOnInit(): void {
  //   this.initMap();
  //   // this.map.on('click', (e: Leaflet.LeafletMouseEvent) => {
  //   //   this.addMarkers(e.latlng);
  //   // });
  // }

  // initMap(): void {
  //   const { lat, lon } = this.filterMap.value;
  //   this.removeMap();

  //   let DefaultIcon = Leaflet.icon({
  //     iconUrl:
  //       'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAApCAYAAADAk4LOAAAFgUlEQVR4Aa1XA5BjWRTN2oW17d3YaZtr2962HUzbDNpjszW24mRt28p47v7zq/bXZtrp/lWnXr337j3nPCe85NcypgSFdugCpW5YoDAMRaIMqRi6aKq5E3YqDQO3qAwjVWrD8Ncq/RBpykd8oZUb/kaJutow8r1aP9II0WmLKLIsJyv1w/kqw9Ch2MYdB++12Onxee/QMwvf4/Dk/Lfp/i4nxTXtOoQ4pW5Aj7wpici1A9erdAN2OH64x8OSP9j3Ft3b7aWkTg/Fm91siTra0f9on5sQr9INejH6CUUUpavjFNq1B+Oadhxmnfa8RfEmN8VNAsQhPqF55xHkMzz3jSmChWU6f7/XZKNH+9+hBLOHYozuKQPxyMPUKkrX/K0uWnfFaJGS1QPRtZsOPtr3NsW0uyh6NNCOkU3Yz+bXbT3I8G3xE5EXLXtCXbbqwCO9zPQYPRTZ5vIDXD7U+w7rFDEoUUf7ibHIR4y6bLVPXrz8JVZEql13trxwue/uDivd3fkWRbS6/IA2bID4uk0UpF1N8qLlbBlXs4Ee7HLTfV1j54APvODnSfOWBqtKVvjgLKzF5YdEk5ewRkGlK0i33Eofffc7HT56jD7/6U+qH3Cx7SBLNntH5YIPvODnyfIXZYRVDPqgHtLs5ABHD3YzLuespb7t79FY34DjMwrVrcTuwlT55YMPvOBnRrJ4VXTdNnYug5ucHLBjEpt30701A3Ts+HEa73u6dT3FNWwflY86eMHPk+Yu+i6pzUpRrW7SNDg5JHR4KapmM5Wv2E8Tfcb1HoqqHMHU+uWDD7zg54mz5/2BSnizi9T1Dg4QQXLToGNCkb6tb1NU+QAlGr1++eADrzhn/u8Q2YZhQVlZ5+CAOtqfbhmaUCS1ezNFVm2imDbPmPng5wmz+gwh+oHDce0eUtQ6OGDIyR0uUhUsoO3vfDmmgOezH0mZN59x7MBi++WDL1g/eEiU3avlidO671bkLfwbw5XV2P8Pzo0ydy4t2/0eu33xYSOMOD8hTf4CrBtGMSoXfPLchX+J0ruSePw3LZeK0juPJbYzrhkH0io7B3k164hiGvawhOKMLkrQLyVpZg8rHFW7E2uHOL888IBPlNZ1FPzstSJM694fWr6RwpvcJK60+0HCILTBzZLFNdtAzJaohze60T8qBzyh5ZuOg5e7uwQppofEmf2++DYvmySqGBuKaicF1blQjhuHdvCIMvp8whTTfZzI7RldpwtSzL+F1+wkdZ2TBOW2gIF88PBTzD/gpeREAMEbxnJcaJHNHrpzji0gQCS6hdkEeYt9DF/2qPcEC8RM28Hwmr3sdNyht00byAut2k3gufWNtgtOEOFGUwcXWNDbdNbpgBGxEvKkOQsxivJx33iow0Vw5S6SVTrpVq11ysA2Rp7gTfPfktc6zhtXBBC+adRLshf6sG2RfHPZ5EAc4sVZ83yCN00Fk/4kggu40ZTvIEm5g24qtU4KjBrx/BTTH8ifVASAG7gKrnWxJDcU7x8X6Ecczhm3o6YicvsLXWfh3Ch1W0k8x0nXF+0fFxgt4phz8QvypiwCCFKMqXCnqXExjq10beH+UUA7+nG6mdG/Pu0f3LgFcGrl2s0kNNjpmoJ9o4B29CMO8dMT4Q5ox8uitF6fqsrJOr8qnwNbRzv6hSnG5wP+64C7h9lp30hKNtKdWjtdkbuPA19nJ7Tz3zR/ibgARbhb4AlhavcBebmTHcFl2fvYEnW0ox9xMxKBS8btJ+KiEbq9zA4RthQXDhPa0T9TEe69gWupwc6uBUphquXgf+/FrIjweHQS4/pduMe5ERUMHUd9xv8ZR98CxkS4F2n3EUrUZ10EYNw7BWm9x1GiPssi3GgiGRDKWRYZfXlON+dfNbM+GgIwYdwAAAAASUVORK5CYII=',
  //     shadowUrl:
  //       'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAAApCAQAAAACach9AAACMUlEQVR4Ae3ShY7jQBAE0Aoz/f9/HTMzhg1zrdKUrJbdx+Kd2nD8VNudfsL/Th///dyQN2TH6f3y/BGpC379rV+S+qqetBOxImNQXL8JCAr2V4iMQXHGNJxeCfZXhSRBcQMfvkOWUdtfzlLgAENmZDcmo2TVmt8OSM2eXxBp3DjHSMFutqS7SbmemzBiR+xpKCNUIRkdkkYxhAkyGoBvyQFEJEefwSmmvBfJuJ6aKqKWnAkvGZOaZXTUgFqYULWNSHUckZuR1HIIimUExutRxwzOLROIG4vKmCKQt364mIlhSyzAf1m9lHZHJZrlAOMMztRRiKimp/rpdJDc9Awry5xTZCte7FHtuS8wJgeYGrex28xNTd086Dik7vUMscQOa8y4DoGtCCSkAKlNwpgNtphjrC6MIHUkR6YWxxs6Sc5xqn222mmCRFzIt8lEdKx+ikCtg91qS2WpwVfBelJCiQJwvzixfI9cxZQWgiSJelKnwBElKYtDOb2MFbhmUigbReQBV0Cg4+qMXSxXSyGUn4UbF8l+7qdSGnTC0XLCmahIgUHLhLOhpVCtw4CzYXvLQWQbJNmxoCsOKAxSgBJno75avolkRw8iIAFcsdc02e9iyCd8tHwmeSSoKTowIgvscSGZUOA7PuCN5b2BX9mQM7S0wYhMNU74zgsPBj3HU7wguAfnxxjFQGBE6pwN+GjME9zHY7zGp8wVxMShYX9NXvEWD3HbwJf4giO4CFIQxXScH1/TM+04kkBiAAAAAElFTkSuQmCC',
  //   });

  //   Leaflet.Marker.prototype.options.icon = DefaultIcon;

  //   this.map = Leaflet.map('map', {
  //     center: [lat, lon],
  //     zoom: 18,
  //   });
  //   this.map.attributionControl.setPrefix(
  //     '&copy; <a href="https://www.gudanggaramtbk.com/suryamadistrindo/">Surya Madistrindo</a>'
  //   );

  //   Leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  //     maxZoom: 20,
  //     minZoom: 2,
  //     attribution:
  //       '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  //   }).addTo(this.map);

  //   const bopen = require('@bopen/leaflet-area-selection');
  //   const areaSelection = new bopen.DrawAreaSelection({
  //     onButtonActivate: () => {
  //       this.removeMarkers();
  //     },
  //     onButtonDeactivate: () => {},
  //     onPolygonReady: (data: any) => {
  //       this.generateCoordinates(data);
  //     },
  //     onPolygonDblClick: (data: any, control: any, e: any) => {
  //       Leaflet.geoJSON(data.toGeoJSON(), {
  //         style: {
  //           opacity: 0.5,
  //           fillOpacity: 0.2,
  //           color: 'red',
  //         },
  //       }).addTo(this.map);
  //       control.deactivate();
  //     },
  //     position: 'topright',
  //   });
  //   this.map.addControl(areaSelection);
  // }

  // async generateCoordinates(data: any) {
  //   const params: any = [];

  //   // using geoJson
  //   // const result: any[] = data.toGeoJSON(20).geometry.coordinates[0];
  //   // result.forEach((data) => {
  //   //   params.push([data[1], data[0]].join(' '));
  //   // });

  //   // using _latlngs
  //   const result: any[] = data._latlngs[0];
  //   result.forEach((data) => params.push([data.lat, data.lng].join(' ')));

  //   this.overpassParams = params.join(' ');
  //   await this.getOverpassData();
  // }

  // addMarkers() {
  //   this.removeMarkers();
  //   //prettier-ignore
  //   this.details.forEach(({ center, tags }: any) => {
  //     Leaflet.marker(center, {
  //       title: JSON.stringify(tags),
  //     }).addTo(this.markerGroup).on('click', (e) => {
  //         console.log(JSON.parse(e.target.options.title));
  //       });
  //   });
  //   this.markerGroup.addTo(this.map);
  //   this.isLoading = false;
  // }

  // async getOverpassData() {
  //   if (!this.overpassParams) return;
  //   this.isLoading = true;
  //   this.details = [];

  //   let result: any[] = [];
  //   // prettier-ignore
  //   if (this.selectedOption === 'all') {
  //     await lastValueFrom(this.apiService.getWayFromLatLong(this.overpassParams)).then((res) => {
  //       console.log(res.elements);
  //       result = res.elements;
  //     });
  //   }  else if (this.selectedOption === 'street') {
  //     await lastValueFrom(this.apiService.getStreetFromLatLong(this.overpassParams)).then((res) => {
  //       console.log(res.elements);
  //       result = res.elements;
  //     })
  //   } else {
  //     await lastValueFrom(this.apiService.getAmenityFromLatLong(this.overpassParams, this.selectedOption)).then((res) => {
  //       console.log(res.elements);
  //       result = res.elements;
  //     });
  //   }

  //   this.details.length = 0;
  //   result.forEach((data) => {
  //     if (data.tags?.name) this.details.push(data);
  //   });

  //   this.addMarkers();
  // }

  // stringify(data: object) {
  //   return JSON.stringify(data);
  // }

  // addMarkerOnClick({ lat, lng }: Leaflet.LatLng) {
  //   // this.coordinates.push([lat, lng]);
  //   // console.log(this.coordinates);
  //   // Leaflet.polyline(this.coordinates, {
  //   //   color: 'red',
  //   // }).addTo(this.map);
  // }

  // removeMarkers() {
  //   this.markerGroup.clearLayers();
  // }

  // removeMap() {
  //   if (this.map != undefined) this.map.remove();
  // }
}
