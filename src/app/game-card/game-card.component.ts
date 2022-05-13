import { Component, Input } from '@angular/core';
import { gameAPI } from 'models/gamesAPI';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.css']
})
export class GameCardComponent {

  faStar = faStar;

  @Input()
  game : gameAPI;


  constructor(private modalService: NgbModal) { }


  openVerticallyCentered(content) {
    this.modalService.open(content, { centered: true });
  }



}
