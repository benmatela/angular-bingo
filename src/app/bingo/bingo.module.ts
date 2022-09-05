import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BingoRoutingModule } from './bingo-routing.module';
import { BingoComponent } from './bingo.component';
import { GridComponent } from './grid/grid.component';


@NgModule({
  declarations: [
    BingoComponent,
    GridComponent,
  ],
  imports: [
    CommonModule,
    BingoRoutingModule
  ]
})
export class BingoModule { }
