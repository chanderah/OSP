import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GudangGaramComponent } from './component/gudang-garam/gudang-garam.component';
import { HomeComponent } from './component/home/home.component';
import { MapComponent } from './component/map/map.component';
import { TryGridComponent } from './component/try-grid/try-grid.component';
import { TryGrid2Component } from './component/try-grid2/try-grid2.component';
import { TryPopupComponent } from './component/try-popup/try-popup.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'grid', component: TryGridComponent },
  { path: 'grid2', component: TryGrid2Component },
  { path: 'popup', component: TryPopupComponent },
  { path: 'map', component: MapComponent },
  { path: 'gudang-garam', component: GudangGaramComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
