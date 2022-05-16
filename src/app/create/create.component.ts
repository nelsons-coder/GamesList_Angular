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
    return this.gameService.createID();
  }

  // Validação de Inputs
  checkForm() : boolean {
    return (this.game.name == '' || this.game.description == '' || this.game.type == '' || this.game.price == null || this.game.developer == '' || this.game.launchDate == new Date() || this.game.img == '' || this.game.trailer == '') ? false : true;
  }

  // Cria o jogo
  createGame() : void {
    if (!this.checkForm()) {
      return;
    } else {
      this.game = new Game(this.game.name, this.createID(), this.game.description, this.game.type, this.game.price, this.game.developer, new Date(this.game.launchDate), this.game.img, this.game.adaptTrailer());
      console.log(this.game);
      
      this.gameService.createGame(this.game);
    }
  }

}
