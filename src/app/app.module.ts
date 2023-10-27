import { CdkColumnDef } from '@angular/cdk/table';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SmCommonLibModule } from 'dist/sm-common-lib';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GudangGaramComponent } from './component/gudang-garam/gudang-garam.component';
import { HomeComponent } from './component/home/home.component';
import { MapComponent } from './component/map/map.component';
import { TryGridComponent } from './component/try-grid/try-grid.component';
import { TryGrid2Component } from './component/try-grid2/try-grid2.component';
import { TryPopupComponent } from './component/try-popup/try-popup.component';

@NgModule({
  declarations: [
    AppComponent,
    GudangGaramComponent,
    MapComponent,
    TryGridComponent,
    TryGrid2Component,
    TryPopupComponent,
    HomeComponent,
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
    MatDialogModule,
    MatChipsModule,
    MatAutocompleteModule,
    // LIB
    SmCommonLibModule,
  ],
  providers: [CdkColumnDef],
  bootstrap: [AppComponent],
})
export class AppModule {}
