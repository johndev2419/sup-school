import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';


interface Turma {
  id: string,
  nome: string,
  sigla: string;

}


@Component({
  selector: 'app-lista-turmas',
  imports: [RouterLink],
  templateUrl: './lista-turmas.html',
  styleUrl: './lista-turmas.scss'
})
export class ListaTurmas {
  turmas: Turma[];

  constructor() {
    this.turmas = this.carregarTurmasLocalStorage();
  }
  salvarLocalStorage(): void {
    let TurmasString = JSON.stringify(this.turmas);

    localStorage.setItem("turmas", TurmasString);
  }

  carregarTurmasLocalStorage(): Turma[] {
    let TurmaDoLocalStorage = localStorage.getItem("turmas");
    if (TurmaDoLocalStorage === null) {
      return [];
    }
    let turmas: Turma[] = JSON.parse(TurmaDoLocalStorage);
    return turmas;
  }

  apagar(turmas: Turma): void {
    let indiceParaApagar = this.turmas.indexOf(turmas);
    this.turmas.splice(indiceParaApagar, 1);
    this.salvarLocalStorage();
  }



}
