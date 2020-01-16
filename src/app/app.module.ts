import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameWrapperComponent } from './game-wrapper/game-wrapper.component';
import { HeaderBarComponent } from './game-wrapper/header-bar/header-bar.component';
import { GameScoreComponent } from './game-score/game-score.component';

@NgModule({
  declarations: [
    AppComponent,
    GameWrapperComponent,
    HeaderBarComponent,
    GameScoreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
