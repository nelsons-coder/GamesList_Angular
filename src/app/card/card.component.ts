import { Component, Input, OnInit, Output } from '@angular/core';
import { Game } from 'models/Games';
import { GameService } from 'services/game.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  providers: [GameService]
})
export class CardComponent implements OnInit {

  @Input()
  game : Game;

  constructor(private gameService : GameService) { 
    
  }

  ngOnInit(): void {
  }

  gamePrice() : string {
    return this.game.price > 0 ? `${this.game.price} €` : 'Grátis';
  }

  changeColor() : string {
    return this.game.price > 0 ? 'rgb(200, 70, 70)' : 'green';
  }

}
