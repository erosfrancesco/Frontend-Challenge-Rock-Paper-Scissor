import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GameWrapperComponent } from './game-wrapper/game-wrapper.component';
import { HeaderBarComponent } from './game-wrapper/header-bar/header-bar.component';
import { GameScoreComponent } from './game-wrapper/header-bar/game-score/game-score.component';
import { GameChooseComponent } from './game-wrapper/game-choose/game-choose.component';
import { GameResultsComponent } from './game-wrapper/game-results/game-results.component';
import { GameRulesComponent } from './game-wrapper/game-rules/game-rules.component';
import { ChooseButtonComponent } from './game-wrapper/game-choose/choose-button/choose-button.component';

import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    GameWrapperComponent,
    HeaderBarComponent,
    GameScoreComponent,
    GameChooseComponent,
    GameResultsComponent,
    GameRulesComponent,
    ChooseButtonComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
