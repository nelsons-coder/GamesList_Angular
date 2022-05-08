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

  name : string;
  index : number;
  game : Game; 

  video : boolean = false;

  constructor(private gameService : GameService, private activateRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this.name = this.activateRoute.snapshot.params['name'];
    this.gameService.gameList.forEach((game, i) => {
      if(game.name == this.name){
        this.game = game; 
        this.index = i;       
      }
    });
  }

  showVideo() : boolean {
    return this.video = true;
  }

  removeGame() : void {
    this.gameService.removeGamePost(this.index);
  }
  
  gamePrice() : string {
    return this.game.price > 0 ? `${this.game.price} €` : 'Grátis';
  }

}
