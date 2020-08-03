import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GameDefaultComponent } from './game-default/game-default.component';

const routes: Routes = [
  {
    path: '',
    component: GameDefaultComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GameRoutingModule {}
