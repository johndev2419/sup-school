import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';


interface Aluno {
  id: string
  nome: string;
  nota1: number;
  nota2: number;
  nota3: number;
  frequencia: number;
  media: number;
  status: string;
}
@Component({
  selector: 'app-lista-alunos',
  imports: [RouterLink],
  templateUrl: './lista-alunos.html',
  styleUrl: './lista-alunos.scss'
})
export class ListaAlunos {
   //Propriedades

  alunos: Aluno[];

  
  constructor(){
    this.alunos = this.carregarAlunosLocalStorage();
  }

 

 carregarAlunosLocalStorage(): Aluno[] {
    let alunoDoLocalStorage = localStorage.getItem("alunos");
    if(alunoDoLocalStorage === null){
      return [];
    }

    let alunos : Aluno[] = JSON.parse(alunoDoLocalStorage);
    return alunos;
  }

  apagar(aluno: Aluno): void {
   let indiceParaApagar = this.alunos.indexOf(aluno);
   this.alunos.splice(indiceParaApagar,1);
   this.salvarLocalStorage();
  }

  salvarLocalStorage(): void {
    let alunosString = JSON.stringify(this.alunos);

    localStorage.setItem("alunos", alunosString);
  }

}
