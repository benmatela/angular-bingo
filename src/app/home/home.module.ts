import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { PageInfoComponent } from './page-info/page-info.component';


@NgModule({
  declarations: [
    HomeComponent,
    PageInfoComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
