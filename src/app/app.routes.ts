import { Routes } from '@angular/router';
import { CalculadoraComponent } from './components/calculadora/calculadora.component';
import { ListaPessoasComponent } from './components/lista-pessoas/lista-pessoas.component';
import { ListaAlunos } from './components/lista-alunos/lista-alunos';
import { CadastroAluno } from './components/cadastro-aluno/cadastro-aluno';

export const routes: Routes = [
    { path: "calculadora", component: CalculadoraComponent },
    { path: "lista-pessoas", component: ListaPessoasComponent },
    { path: "alunos", component: ListaAlunos },
    { path: "alunos/cadastro", component: CadastroAluno }

];

//SPA : SINGLE PAGE APPLICATION 