import { Component } from '@angular/core';
import { Navbar, navbarMenu } from "./components/navbar/navbar";

@Component({
  selector: 'app-header',
  imports: [Navbar],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  menus: navbarMenu [];


  constructor() {
  this.menus = [
    {link: "Calculadora", titulo: "Calculadora"},
    {link: "lista-pessoas", titulo: "Lista-pessoas"},
    {link: "lista-tarefas", titulo: "Lista tarefas"},
    {link: "alunos", titulo: "Alunos"},
    {link: "turmas", titulo: "Turma"},
    {link: "materias", titulo: "Materias"},
  ]
 }
}
