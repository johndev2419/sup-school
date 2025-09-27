import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';


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
  idEditar?: string;
 


  constructor(
    private router: Router,
    private activadtedRoute : ActivatedRoute
   ){
    this.turmas = this.carregarTurmasLocalStorage();
    let idParaEditar = this.activadtedRoute.snapshot.paramMap.get("id");

    if(idParaEditar !== null) {
      this.idEditar = idParaEditar.toString();

      this.preencherCamposParaEditar()
    }
  }
  preencherCamposParaEditar(): void {
   let turma = this.turmas.filter(turma => turma.id === this.idEditar)[0];

   this.nome = turma.nome
   this.sigla = turma.sigla
  }
  


salvar(): void {
 debugger
  if(this.idEditar !== undefined){
    this.cadastrarTurma();
  } else{ 
    this.idEditarTurma();
  }

  
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

cadastrarTurma(): void {
let turmas: Turma = {
    id: crypto.randomUUID(),
    nome: this.nome,
    sigla: this.sigla
  }
}

idEditarTurma(): void {
  debugger
  let indiceTurma = this.turmas.findIndex(turma => turma.id === this.idEditar);

  this.turmas[indiceTurma].nome = this.nome;
  this.turmas[indiceTurma].sigla = this.sigla;
}










}
