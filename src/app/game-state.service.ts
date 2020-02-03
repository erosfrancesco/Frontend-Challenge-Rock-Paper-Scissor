import { Injectable } from '@angular/core';


enum GameStates {
  CHOOSE = 'C',
  RESULT = 'R'
}

export enum GameChoises {
  ROCK = './assets/images/icon-rock.svg',
  PAPER = './assets/images/icon-paper.svg',
  SCISSOR = './assets/images/icon-scissors.svg'
}


const vh = 23;
const dy = 5;
// Should be computed...
export const ChoisesCSSStyles = {
  ROCK: { 
    backgroundColor: '#dc3c58', borderColor: 'rgb(156, 23, 52)', // red
    top: 'calc(' + dy + '% + ' + vh + 'vh * 1.2 * 2.118)', left: 'calc(50% - ' + vh + 'vh * (1 / 2))'
  },
  PAPER: { backgroundColor: '#4a6af1', borderColor: 'rgb(41, 69, 192)', // blue
    top: 'calc(' + dy + '% + ' + vh + 'vh)', left: 'calc(50% - ' + vh + 'vh * (3 / 2))'
  },

  SCISSOR: { backgroundColor: '#eba00f',  borderColor: 'rgb(198, 109, 27)', // yellow
    top: 'calc(' + dy + '% + ' + vh + 'vh)', left: 'calc(50% + ' + vh + 'vh * (1 / 2))'
  }
};


@Injectable({
  providedIn: 'root'
})
export class GameStateService {

  static GameTypes = GameChoises;

  availableChoises = Object.keys(GameChoises);

  state: GameStates = GameStates.CHOOSE;
  score = 0;

  you: GameChoises = null;
  house: GameChoises = null;
}
