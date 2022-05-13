import { Component, Input, OnInit } from '@angular/core';
import { gameAPI } from 'models/gamesAPI';
import { faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.css']
})
export class GameCardComponent implements OnInit {

  faStar = faStar;

  @Input()
  game : gameAPI;

  constructor() { }

  ngOnInit(): void {
  }

  alertInfo() {
    alert('Página de detalhe não implementada para a API!');
  }

}
