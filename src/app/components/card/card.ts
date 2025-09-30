import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.scss'
})
export class Card {
 //ng g c card
 Input() image: string;
 Input() nome: string;
 Input()numero: number;
 tipoNome: string;
 tipoCor: string;
}
