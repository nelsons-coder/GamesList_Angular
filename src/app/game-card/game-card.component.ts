import { Component, Input, OnInit } from '@angular/core';
import { gameAPI } from 'models/gamesAPI';

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.css']
})
export class GameCardComponent implements OnInit {

  @Input()
  game : gameAPI;

  constructor() { }

  ngOnInit(): void {
  }

}
