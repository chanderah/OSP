import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GudangGaramComponent } from './component/gudang-garam/gudang-garam.component';
import { MapComponent } from './component/map/map.component';

const routes: Routes = [
  { path: 'gudang-garam', component: GudangGaramComponent },
  { path: 'map', component: MapComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
