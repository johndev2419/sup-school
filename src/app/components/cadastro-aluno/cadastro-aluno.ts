import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {  ActivatedRoute, Router } from '@angular/router';

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
  selector: 'app-cadastro-aluno',
  imports: [FormsModule],
  templateUrl: './cadastro-aluno.html',
  styleUrl: './cadastro-aluno.scss'
})
export class CadastroAluno {
  //Propriedades

  alunos: Aluno[];



  nome: string = "";
  nota1?: number;
  nota2?: number;
  nota3?: number;
  frequencia?: number;
  idEditar?: string;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ){
    this.alunos = this.carregarAlunosLocalStorage();
    let idParaEditar = this.activatedRoute.snapshot.paramMap.get("id");
    // se o idParaEditar for diferente de null,que dizer o id está definido na url  
    if(idParaEditar !== null) {

      this.idEditar = idParaEditar.toString();


      this.preencherCamposParaEditar();
    }
  }
  //Métodos
  salvar(): void {
    let media = this.calcularMedia();
    let status = this.descobrirStatus(media);

    if(this.idEditar === undefined){
      this.cadastrarAluno(media, status);
    }else {
      this.idEditarAluno(media,status);
    }

    this.salvarLocalStorage();
    this.router.navigate(["/alunos"]);
  }

   

  idEditarAluno(media: number, status: string): void {
    let indicelista = this.alunos.findIndex(aluno => aluno.id === this.idEditar);

    this.alunos[indicelista].nome = this.nome;
    this.alunos[indicelista].nota1 = this.nota1!; 
    this.alunos[indicelista].nota2= this.nota2!;
    this.alunos[indicelista].nota3 = this.nota3!;
    this.alunos[indicelista].media= media;
    this.alunos[indicelista].frequencia= this.frequencia!;
    this.alunos[indicelista].status= status;
  }

  cadastrarAluno(media: number, status: string): void{
    let aluno: Aluno = {
      id: crypto.randomUUID(),
      nome: this.nome,
      nota1: this.nota1!,
      nota2: this.nota2!,
      nota3: this.nota3!,
      frequencia: this.frequencia!,
      media: media,
      status: status
     
    };
    this.alunos.push(aluno) 
  }

  salvarLocalStorage(): void {
    let alunosString = JSON.stringify(this.alunos);

    localStorage.setItem("alunos", alunosString);
  }
  
  carregarAlunosLocalStorage(): Aluno[] {
    let alunoDoLocalStorage = localStorage.getItem("alunos");
    if(alunoDoLocalStorage === null){
      return [];
    }

    let alunos : Aluno[] = JSON.parse(alunoDoLocalStorage);
    return alunos;
  }





  calcularMedia(): number {
    let resulatado: number = (this.nota1! + this.nota2! + this.nota3!) / 3
    return resulatado;
  }

  descobrirStatus(media: number): string {
    let status = "";
    if (media >= 7 && this.frequencia! >= 75) {
      status = "Aprovado";
    } else if (media < 7) {
      status = "Reprovado Média";
    } else {
      status = "Reprovado por Frequencia";
    }
    return status;

  }




  preencherCamposParaEditar(): void {
    let aluno = this.alunos.filter(aluno => aluno.id === this.idEditar)[0];

    this.nome = aluno.nome
    this.nota1 = aluno.nota1
    this.nota2 = aluno.nota2
    this.nota3= aluno.nota3
    this.frequencia = aluno.frequencia

  }
}
