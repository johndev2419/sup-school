import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';





interface materia {
  id: string
  nome: string;
}

@Component({
  selector: 'app-lista-materias',
  imports: [RouterLink],
  templateUrl: './lista-materias.html',
  styleUrl: './lista-materias.scss'
})
export class ListaMaterias {
 materias: materia [];

 constructor() {
  this.materias = this.carregarMateriasLocalStorage();
 }
salvarLocalStorage(): void {
  let materiaString = JSON.stringify(this.materias);

  localStorage.setItem("materias", materiaString);
 }

 carregarMateriasLocalStorage(): materia[] {
  let materiaDoLocalStage = localStorage.getItem("materias");
  if(materiaDoLocalStage === null){
    return[];
  }
  let materias: materia[] = JSON.parse(materiaDoLocalStage);
  return materias
 }
}
