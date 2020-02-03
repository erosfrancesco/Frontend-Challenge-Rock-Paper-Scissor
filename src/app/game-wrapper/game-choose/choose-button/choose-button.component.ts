import { Component, OnInit, Input, ViewChild, Renderer2 } from '@angular/core';
import { GameStateService, GameChoises, ChoisesCSSStyles } from 'src/app/game-state.service';

@Component({
  selector: 'app-choose-button',
  templateUrl: './choose-button.component.html',
  styleUrls: ['./choose-button.component.scss']
})
export class ChooseButtonComponent implements OnInit {
  @Input() choise: GameChoises;
  @ViewChild('border') border;
  @ViewChild('boxShadow') boxShadow;


  constructor(public game: GameStateService, private renderer: Renderer2) { }

  ngOnInit() {

    this.border.nativeElement.style.position = 'fixed';

    this.border.nativeElement.style.top = ChoisesCSSStyles[this.choise].top;
    this.border.nativeElement.style.left = ChoisesCSSStyles[this.choise].left;
    this.border.nativeElement.style.backgroundColor = ChoisesCSSStyles[this.choise].backgroundColor;

    this.boxShadow.nativeElement.style.boxShadow = 'inset 0px -1.3vh ' + ChoisesCSSStyles[this.choise].borderColor;
  }

  computeImageSource() {
    return GameChoises[this.choise];
  }

  selectThisChoise(e) {
    console.log('ok');
  }

}
