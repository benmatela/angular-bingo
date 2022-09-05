import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) }, { path: 'bingo', loadChildren: () => import('./bingo/bingo.module').then(m => m.BingoModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }