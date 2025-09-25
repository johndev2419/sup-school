import { Routes } from '@angular/router';
import { CalculadoraComponent } from './components/calculadora/calculadora.component';
import { ListaPessoasComponent } from './components/lista-pessoas/lista-pessoas.component';
import { ListaAlunos } from './components/lista-alunos/lista-alunos';
import { CadastroAluno } from './components/cadastro-aluno/cadastro-aluno';
import { ListaTurmas } from './components/lista-turmas/lista-turmas';
import { CadastroTurmas } from './components/cadastro-turmas/cadastro-turmas';
import { ListaMaterias } from './components/lista-materias/lista-materias';
import { CadastroMateria } from './components/cadastro-materia/cadastro-materia';

export const routes: Routes = [
    { path: "calculadora", component: CalculadoraComponent },
    { path: "lista-pessoas", component: ListaPessoasComponent },
    { path: "alunos", component: ListaAlunos },
    { path: "alunos/cadastro", component: CadastroAluno },
    { path: "turmas", component: ListaTurmas },
    { path: "turmas/cadastro", component: CadastroTurmas },
    { path: "materias", component: ListaMaterias },
    { path: "materia/cadastro", component: CadastroMateria }

];

//SPA : SINGLE PAGE APPLICATION 