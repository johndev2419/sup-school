import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';


interface Turma {
  id: string,
  nome: string,
  sigla: string;

}

@Component({
  selector: 'app-cadastro-turmas',
  imports: [FormsModule],
  templateUrl: './cadastro-turmas.html',
  styleUrl: './cadastro-turmas.scss'
})
export class CadastroTurmas {

  turmas: Turma[];


  nome: string = "";
  sigla: string = "";


  constructor(private router: Router){
    this.turmas = this.carregarTurmasLocalStorage();
  }
  


salvar(): void {

  let turmas: Turma = {
    id: crypto.randomUUID(),
    nome: this.nome,
    sigla: this.sigla
  }

   this.turmas.push(turmas);
   this.salvarLocalStorage();
   this.router.navigate(["/turmas"]);
}

salvarLocalStorage(): void { 
 let TurmasString = JSON.stringify(this.turmas);

 localStorage.setItem("turmas",TurmasString);
}

carregarTurmasLocalStorage(): Turma[] {
  let TurmaDoLocalStorage = localStorage.getItem("turmas");
  if(TurmaDoLocalStorage === null) {
    return [];
  }
  let turmas: Turma[] = JSON.parse(TurmaDoLocalStorage);
  return turmas;
}










}
