import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Game } from 'models/Games';
import { GameService } from 'services/game.service';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {

  // Nome do Jogo no parametro
  name : string;

  // Jogo escolhido pelo parametro
  game : Game; 

  // Booleano para a opção de mostrar o trailer do Jogo
  trailer : boolean = false;

  constructor(private gameService : GameService, private activateRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this.name = this.activateRoute.snapshot.params['name'];
    // this.gameService.gameList.forEach((game, i) => {
    //   if(game.name == this.name){
    //     this.game = game;                                    <------- Perguntar ao stor!!!!!
    //     this.index = i;       
    //   }
    // });
    this.game = this.gameService.findGame(this.name);
  }

  showVideo() : boolean {
    return this.trailer = true;
  }

  removeGame() : void {
    this.gameService.removeGamePost(this.game.index);
  }
  

}
