import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GameWrapperComponent } from './game-wrapper/game-wrapper.component';

const routes: Routes = [
  {path: "", component: GameWrapperComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
