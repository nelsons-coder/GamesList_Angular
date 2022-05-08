import { Component } from '@angular/core';
import { Game } from 'models/Games';
import { GameService } from 'services/game.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  gameList : Game[];

  constructor(private gameService : GameService) { 
    this.gameList = this.gameService.gameList;
  }

}
