import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Game } from 'models/Games';
import { gameAPI } from 'models/gamesAPI';
import { GameService } from 'services/game.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  // Lista do Projeto
  gameList : Game[];

  // Lista da API
  gameListAPI : gameAPI[];


  constructor(private gameService : GameService) { 
    this.gameList = this.gameService.gameList;
  }

  ngOnInit(): void {
  }
  

}
