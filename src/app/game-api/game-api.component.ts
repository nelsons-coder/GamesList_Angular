import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { gameAPI } from 'models/gamesAPI';
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-game-api',
  templateUrl: './game-api.component.html',
  styleUrls: ['./game-api.component.css']
})

export class GameApiComponent implements OnInit {

  faArrowCircleLeft = faArrowCircleLeft;
  faArrowCircleRight = faArrowCircleRight;


  // Lista da API
  gameListAPI : gameAPI[];

  page : number = 1;

  constructor(private httpCLient : HttpClient) { }

  ngOnInit(): void {
    this.getGames();
  }

  getGames() {
    this.httpCLient.get<any>('https://api.rawg.io/api/games?key=5043f72042544d07941fd6cabb5a34c3').subscribe(res => {
      console.log(res);
      this.gameListAPI = res.results;
    });
  }

  nextPage() {
    this.page += 1;
    this.httpCLient.get<any>(`https://api.rawg.io/api/games?key=5043f72042544d07941fd6cabb5a34c3&page=${this.page}`).subscribe(res => {
      console.log(res);
      this.gameListAPI = res.results;
    });
  }

  previousPage() {
    this.page -= 1;
    this.httpCLient.get<any>(`https://api.rawg.io/api/games?key=5043f72042544d07941fd6cabb5a34c3&page=${this.page}`).subscribe(res => {
      console.log(res);
      this.gameListAPI = res.results;
    });
  }

}
