import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BingoComponent } from './bingo.component';
import { GridComponent } from './grid/grid.component';

const routes: Routes = [
  { path: '', component: BingoComponent },
  { path: 'grid', component: GridComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BingoRoutingModule { }
