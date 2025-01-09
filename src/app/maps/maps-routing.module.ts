import { FullScreenPageComponent } from './pages/full-screen-page/full-screen-page.component';
import { MapsLayoutComponent } from './layout/maps-layout/maps-layout.component';
import { MarkersPageComponent } from './pages/markers-page/markers-page.component';
import { NgModule } from '@angular/core';
import { PropertiesPageComponent } from './pages/properties-page/properties-page.component';
import { RouterModule, Routes } from '@angular/router';
import { ZoomRangePageComponent } from './pages/zoom-range-page/zoom-range-page.component';

const routes: Routes = [
  {
    path: '',
    component: MapsLayoutComponent,
    children: [
      { path: 'fullscreen', component: FullScreenPageComponent},
      { path: 'markers-page', component: MarkersPageComponent},
      { path: 'properties-page', component: PropertiesPageComponent},
      { path: 'zoom-range', component: ZoomRangePageComponent},
      { path: '**', redirectTo: 'fullscreen'},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MapsRoutingModule { }
