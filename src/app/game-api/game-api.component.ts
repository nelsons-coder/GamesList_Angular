import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { gameAPI } from 'models/gamesAPI';
import { faArrowCircleLeft, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-game-api',
  templateUrl: './game-api.component.html',
  styleUrls: ['./game-api.component.css']
})

export class GameApiComponent implements OnInit {

  faArrowCircleLeft : IconDefinition = faArrowCircleLeft;
  faArrowCircleRight : IconDefinition = faArrowCircleRight;

  // Loading
  loading : boolean = true;
  // Lista da API
  gameListAPI : gameAPI[];
  // Pagina
  page : number = 1;


  constructor(private httpCLient : HttpClient) { }

  ngOnInit(): void {
    this.getGames();
  }
  
  pageLoaded() : void {
    this.loading = false;
  }

  getGames() : void {
    this.httpCLient.get<any>('https://api.rawg.io/api/games?key=5043f72042544d07941fd6cabb5a34c3').subscribe(res => {
      this.pageLoaded();
      console.log(res);
      this.gameListAPI = res.results;
    });
  }

  nextPage() : void {
    this.page += 1;
    this.httpCLient.get<any>(`https://api.rawg.io/api/games?key=5043f72042544d07941fd6cabb5a34c3&page=${this.page}`).subscribe(res => {
      this.pageLoaded();
      console.log(res);
      this.gameListAPI = res.results;
    });
  }

  previousPage() : void {
    this.page -= 1;
    this.httpCLient.get<any>(`https://api.rawg.io/api/games?key=5043f72042544d07941fd6cabb5a34c3&page=${this.page}`).subscribe(res => {
      this.pageLoaded();
      console.log(res);
      this.gameListAPI = res.results;
    });
  }
}
