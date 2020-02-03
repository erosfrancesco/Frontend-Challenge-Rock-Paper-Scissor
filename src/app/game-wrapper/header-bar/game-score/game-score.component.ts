import { Component, OnInit } from '@angular/core';
import { GameStateService } from 'src/app/game-state.service';

@Component({
  selector: 'app-game-score',
  templateUrl: './game-score.component.html',
  styleUrls: ['./game-score.component.scss']
})
export class GameScoreComponent implements OnInit {

  constructor(public game: GameStateService) { }

  ngOnInit() {
  }

}
