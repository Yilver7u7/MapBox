import { AfterViewInit, Component, ElementRef, Input, ViewChild, } from '@angular/core';
import { Map, Marker } from 'mapbox-gl';

@Component({
  selector: 'app-mini-map',
  templateUrl: './mini-map.component.html',
  styleUrl: './mini-map.component.css'
})
export class MiniMapComponent implements AfterViewInit{

  @Input() LngLat?: [number,number];
  @ViewChild('map') divMap?: ElementRef;

  ngAfterViewInit() {
    if( !this.divMap?.nativeElement ) throw "Map div not found"
    if( !this.LngLat ) throw "LngLat can't be null"

    const map = new Map({
      container: this.divMap?.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: this.LngLat, // starting position [lng, lat]
      zoom: 15, // starting zoom
      interactive: false, // make the map non-interactive to avoid interfering with other components
    });
    //Create a new Market with the position of the house
    new Marker()
    .setLngLat( this.LngLat )
    .addTo( map )
  }

}
