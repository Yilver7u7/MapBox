import { Component } from '@angular/core';

interface MenuItems{
  name: string;
  route: string;
}

@Component({
  selector: 'maps-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.css'
})
export class SideMenuComponent {

  public menuItems:MenuItems[] = [
    {route: '/maps/fullscreen', name: 'Full-Screen'},
    {route: '/maps/zoom-range', name: 'Zoom-Range'},
    {route: '/maps/markers', name: 'Markers'},
    {route: '/maps/properties', name: 'Houses'},
  ];



}
