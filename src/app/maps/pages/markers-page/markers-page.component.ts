import { Component, ElementRef, ViewChild } from '@angular/core';
import { LngLat, Map, Marker } from 'mapbox-gl';

interface MarkerAndColor{
  color: string;
  marker: Marker;
}

@Component({
  templateUrl: './markers-page.component.html',
  styleUrl: './markers-page.component.css'
})
export class MarkersPageComponent {

  @ViewChild('map') divMap?: ElementRef; //En algun momento el valor es undefind

  public markers: MarkerAndColor[] = [];

  public zoom: number = 13;
  public map?: Map;
  public currentLngLat: LngLat = new LngLat(-74.5, 40);



  ngAfterViewInit(): void {
    // Debido a que en el momento en que aun no se ha cargado puede ser nulo hacemos una pequeña validación
    if(!this.divMap) throw 'The element divMap it was not find'

    console.log(this.zoom)
    this.map = new Map({
      container: this.divMap?.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: this.currentLngLat,
      zoom: this.zoom, // starting zoom
    });

    // const markerHtml = document.createElement('h1');
    // markerHtml.innerHTML ='YOU ARE HERE MY NIGGA';

    // const marker = new Marker({
    //   //color: 'red',
    //   element: markerHtml
    // })
    // .setLngLat( this.currentLngLat)
    // .addTo(this.map);
  }

  createMarker(){
    if( !this.map ) return
    // Crea un exadecimal de manera aleatoria
    const color = '#xxxxxx'.replace(/x/g, y=>(Math.random()*16|0).toString(16));
    const LngLat = this.map?.getCenter();

    this.addMarker(LngLat, color)
  }

  addMarker(LngLat: LngLat, color: string = 'red'){
    //Verificamos que exista el mapa antes de hacer algo sobre este
    if( !this.map ) return
    //Creamos un nuevo marcador
    const marker = new Marker({
      color: color,
      draggable: true,
    }).setLngLat( LngLat ).addTo( this.map )
    this.markers.push({ color, marker,});

  }

  deleteMarket( index: number ){
    this.markers[index].marker.remove();
    this.markers.splice(index, 1);
  }



}
