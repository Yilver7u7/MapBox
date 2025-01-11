import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import {Map} from 'mapbox-gl'


@Component({
  templateUrl: './full-screen-page.component.html',
  styleUrl: './full-screen-page.component.css'
})
export class FullScreenPageComponent implements AfterViewInit{


  // Mediante una referencia local tomamos el valor para no
  //Tenere problemas futuros con los id de otros elementos map
  @ViewChild('map') divMap?: ElementRef; //En algun momento el valor es undefind

  ngAfterViewInit(): void {
    // Debido a que en el momento en que aun no se ha cargado puede ser nulo hacemos una pequeña validación
    if(!this.divMap) throw 'The element divMap it was not find'

    console.log(this.divMap)
    const map = new Map({
      container: this.divMap?.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: [-74.5, 40], // starting position [lng, lat]
      zoom: 9, // starting zoom
    });
  }





}
