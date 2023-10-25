import { CdkColumnDef } from '@angular/cdk/table';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SmCommonLibModule } from 'sm-common-lib';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GudangGaramComponent } from './component/gudang-garam/gudang-garam.component';
import { MapComponent } from './component/map/map.component';
import { TryGridComponent } from './component/try-grid/try-grid.component';
import { TryComponent } from './component/try/try.component';

@NgModule({
  declarations: [
    AppComponent,
    GudangGaramComponent,
    MapComponent,
    TryComponent,
    TryGridComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatDividerModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    MatSelectModule,
    MatTableModule,

    // LIB
    SmCommonLibModule,
  ],
  providers: [CdkColumnDef],
  bootstrap: [AppComponent],
})
export class AppModule {}
