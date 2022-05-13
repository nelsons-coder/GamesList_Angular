import { Component } from '@angular/core';
import { faGamepad } from '@fortawesome/free-solid-svg-icons';
import { faChessKnight } from '@fortawesome/free-solid-svg-icons';
import { faDiceSix } from '@fortawesome/free-solid-svg-icons';
import { faPuzzlePiece } from '@fortawesome/free-solid-svg-icons';
import { GameService } from 'services/game.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [GameService]
})

export class AppComponent {

  title = 'Games';
  faGamepad = faGamepad;
  faChessKnight = faChessKnight;
  faDiceSix = faDiceSix;
  faPuzzlePiece = faPuzzlePiece;

  collapsed : boolean = true;

  // Variavel para botão de Versão
  versaoOn : boolean = false;

  botaoVersaoOn() : void {
    this.versaoOn = true;
  }

  botaoVersaoOff() : void {
    this.versaoOn = false;
  }

}
