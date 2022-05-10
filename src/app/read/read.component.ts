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

  // ID do Jogo no parametro
  id : number;

  // Jogo escolhido pelo parametro
  game : Game; 

  // Booleano para a opção de mostrar o trailer do Jogo
  trailer : boolean = false;

  // Index do jogo a ser eliminado
  index : number;

  constructor(private gameService : GameService, private activateRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.activateRoute.snapshot.params['id'];
    this.game = this.gameService.findGame(this.id);
  }

  showVideo() : boolean {
    return this.trailer = true;
  }

  removeGame() : void {
    this.index = this.gameService.findGameByID(this.id)
    this.gameService.removeGame(this.index);
  }
  

}
