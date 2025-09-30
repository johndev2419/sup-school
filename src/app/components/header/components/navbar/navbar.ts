import { Component, Input, } from '@angular/core';
import { RouterLink } from '@angular/router';

export interface navbarMenu {
  link: string;
  titulo: string;
}

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})
export class Navbar {

  

 //input => entrada
 //output => saída
 
  @Input() menus: navbarMenu[] = [];
 
 
 

}
