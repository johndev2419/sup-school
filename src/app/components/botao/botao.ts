import { Component, Input } from '@angular/core';

type tipos = "aviso" | "padrão" | "perigo" | "sucesso";


@Component({
  selector: 'botao',
  imports: [],
  templateUrl: './botao.html',
  styleUrl: './botao.scss'
})
export class Botao {
 @Input() texto : string = "";
 @Input() tipo : tipos = "padrão" ;
}
