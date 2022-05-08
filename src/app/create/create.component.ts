import { Component, OnInit } from '@angular/core';
import { Game } from 'models/Games';
import { GameService } from 'services/game.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  game : Game;

  name : string;
  description : string;
  type : string;
  price : number;
  developer : string;
  launchDate : string;
  img : string;
  trailer : string;

  constructor(private gameService : GameService) { }

  ngOnInit(): void {
  }

  createPostGame() {
    if(this.name == undefined) return; // Não cria um Jogo se o campo "Nome" estiver vazio!
    this.game = new Game(this.name, this.description, this.type, this.price, this.developer, this.launchDate, this.img, this.trailer);
    
    this.gameService.createGamePost(this.game);
  }



}
