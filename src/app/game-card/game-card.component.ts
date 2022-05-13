import { Component, Input, ViewChild } from '@angular/core';
import { gameAPI } from 'models/gamesAPI';
import { faStar, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.css']
})
export class GameCardComponent {


  faStar : IconDefinition = faStar;

  @Input()
  gameAPI : gameAPI;

  constructor(private modalService: NgbModal) { }


  openVerticallyCentered(content) : void {
    this.modalService.open(content, { centered: true });
  }



}
