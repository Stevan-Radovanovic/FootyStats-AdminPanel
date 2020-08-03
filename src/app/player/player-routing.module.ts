import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlayerDefaultComponent } from './player-default/player-default.component';

const routes: Routes = [
  {
    path: '',
    component: PlayerDefaultComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlayerRoutingModule {}
