import { Component, OnInit } from '@angular/core';
import { Game } from 'models/Games';
import { GameService } from 'services/game.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  // Jogo inicializado apenas para guardar os dados do User
  game : Game = new Game('', null, '', '', null, '', new Date(), '', '');

  constructor(private gameService : GameService) { }

  ngOnInit(): void { }

  // Atribui um ID random
  createID() : number {
    let aux : number = 0;
    let num : number;
    while(aux == 0){
        num = Math.floor(Math.random() * 10000);
        if (!this.gameService.checkID(num)) {
          aux = 1;
        }
    }
    return num;
  }

  // Cria o jogo
  createGame() : void {
    if(this.game.name == '') return; // Não cria um Jogo se o campo "Nome" estiver vazio!
    this.game = new Game(this.game.name, this.createID(), this.game.description, this.game.type, this.game.price, this.game.developer, this.game.launchDate, this.game.img, this.game.adaptTrailer());
    this.gameService.createGame(this.game);
  }



}
