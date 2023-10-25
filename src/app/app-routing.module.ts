import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GudangGaramComponent } from './component/gudang-garam/gudang-garam.component';
import { MapComponent } from './component/map/map.component';
import { TryGridComponent } from './component/try-grid/try-grid.component';
import { TryGrid2Component } from './component/try-grid2/try-grid2.component';

const routes: Routes = [
  { path: 'grid', component: TryGridComponent },
  { path: 'grid2', component: TryGrid2Component },
  { path: 'map', component: MapComponent },
  { path: 'gudang-garam', component: GudangGaramComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
