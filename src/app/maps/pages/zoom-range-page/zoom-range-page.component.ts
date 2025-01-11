import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import {LngLat, Map} from 'mapbox-gl'

@Component({
  templateUrl: './zoom-range-page.component.html',
  styleUrl: './zoom-range-page.component.css'
})
export class ZoomRangePageComponent implements AfterViewInit, OnDestroy{

  @ViewChild('map') divMap?: ElementRef; //En algun momento el valor es undefind

  public zoom: number = 10;
  public map?: Map;
  public currentLngLat: LngLat = new LngLat(-74.5, 40);


  ngAfterViewInit(): void {
    // Debido a que en el momento en que aun no se ha cargado puede ser nulo hacemos una pequeña validación
    if(!this.divMap) throw 'The element divMap it was not find'

    console.log(this.zoom)
    this.map = new Map({
      container: this.divMap?.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: this.currentLngLat, // starting position [lng, lat]
      zoom: this.zoom, // starting zoom
    });

    this.mapListeners();
  }

  mapListeners(){
    if( !this.map )throw 'The Map is not loading'

    this.map.on('zoom', (ev) => {
      this.zoom = this.map!.getZoom();
    })


    this.map.on('zoomend', (ev) => {
      if(this.map!.getZoom() < 18) return;
      this.map!.zoomTo(18);
    })

    this.map.on('move', () => {
      this.currentLngLat = this.map!.getCenter();
      const { lng, lat } = this.currentLngLat
    });
  }

  ngOnDestroy(): void {
    this.map?.remove();
  }

  zoomIn(){
    this.zoom = this.map!.getZoom();
    this.map?.zoomIn();
    console.log(this.zoom)
  }

  zoomOut(){
    this.zoom = this.map!.getZoom();
    this.map?.zoomOut();
    console.log(this.zoom)
  }

  zoomChanged( value: string ){
    this.zoom = Number(value);
    this.map?.zoomTo( 18 );
  }

}

