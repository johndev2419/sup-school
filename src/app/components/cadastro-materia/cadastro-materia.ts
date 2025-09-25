import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';



interface materia {
  id: string
  nome: string;
}

@Component({
  selector: 'app-cadastro-materia',
  imports: [FormsModule],
  templateUrl: './cadastro-materia.html',
  styleUrl: './cadastro-materia.scss'
})
export class CadastroMateria {
 materias: materia [];

 nome: string = "";

 constructor(private router: Router) {
  this.materias = this.carregarMateriasLocalStorage();
 }

 salvar(): void {
  let materias : materia = {
    id: crypto.randomUUID(),
    nome: this.nome
  }
  this.materias.push(materias);
  this.salvarLocalStorage();
  this.router.navigate(["/materias"]);
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
