import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GudangGaramComponent } from './component/gudang-garam/gudang-garam.component';
import { MapComponent } from './component/map/map.component';
import { TryComponent } from './component/try/try.component';

const routes: Routes = [
  { path: 'try', component: TryComponent },
  { path: 'map', component: MapComponent },
  { path: 'gudang-garam', component: GudangGaramComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
