import { NgModule } from '@angular/core';
import { CustomGridComponent } from './component/custom-grid/custom-grid.component';
import { SmCommonLibComponent } from './sm-common-lib.component';

@NgModule({
  declarations: [SmCommonLibComponent, CustomGridComponent],
  imports: [],
  exports: [SmCommonLibComponent, CustomGridComponent],
})
export class SmCommonLibModule {}
