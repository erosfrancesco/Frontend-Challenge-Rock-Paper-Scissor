import { Component, OnInit } from '@angular/core';
import { GameStateService } from 'src/app/game-state.service';

@Component({
  selector: 'app-game-choose',
  templateUrl: './game-choose.component.html',
  styleUrls: ['./game-choose.component.scss']
})
export class GameChooseComponent implements OnInit {

  constructor(public game: GameStateService) { }

  ngOnInit() {
  }

}
