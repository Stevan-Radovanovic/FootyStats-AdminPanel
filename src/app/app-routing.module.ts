import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { AuthComponent } from './auth/auth.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomePageComponent,
  },
  {
    path: 'login',
    component: AuthComponent,
  },
  {
    path: 'players',
    loadChildren: () =>
      import('./player/player.module').then((m) => m.PlayerModule),
  },
  {
    path: 'games',
    loadChildren: () => import('./game/game.module').then((m) => m.GameModule),
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
