import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapsRoutingModule } from './maps-routing.module';
import { MiniMapComponent } from './components/mini-map/mini-map.component';
import { MapsLayoutComponent } from './layout/maps-layout/maps-layout.component';
import { FullScreenPageComponent } from './pages/full-screen-page/full-screen-page.component';
import { MarkersPageComponent } from './pages/markers-page/markers-page.component';
import { PropertiesPageComponent } from './pages/properties-page/properties-page.component';
import { ZoomRangePageComponent } from './pages/zoom-range-page/zoom-range-page.component';
import mapboxgl from 'mapbox-gl'
import { CounterAloneComponent } from "../alone/component/counter-alone/counter-alone.component";
import { SideMenuComponent } from '../alone/component/side-menu/side-menu.component';

( mapboxgl as any).accessToken = 'pk.eyJ1Ijoib3RsdXMtZGV2IiwiYSI6ImNtNXIyMDhwbTA2angybnB4ejhiNXFoZWoifQ.5MkDZtMYCgxcznbaSHgFZA';


@NgModule({
  declarations: [
    MiniMapComponent,
    MapsLayoutComponent,
    FullScreenPageComponent,
    MarkersPageComponent,
    PropertiesPageComponent,
    ZoomRangePageComponent,
  ],
  imports: [
    CommonModule,
    MapsRoutingModule,
    CounterAloneComponent,
    SideMenuComponent
]
})
export class MapsModule { }
