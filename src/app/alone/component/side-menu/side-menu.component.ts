import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface MenuItems{
  name: string;
  route: string;
}

@Component({
  standalone: true,
  imports:[CommonModule, RouterLink],
  selector: 'side-menu',
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.css'
})
export class SideMenuComponent {

  public menuItems:MenuItems[] = [
    {route: '/maps/fullscreen', name: 'Full-Screen'},
    {route: '/maps/zoom-range', name: 'Zoom-Range'},
    {route: '/maps/markers', name: 'Markers'},
    {route: '/maps/properties', name: 'Houses'},
    {route: '/alone', name: 'alone'},
  ];



}
