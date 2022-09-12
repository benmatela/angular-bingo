import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectedGridBoxDirective } from './directives/selected-grid-box.directive';



@NgModule({
  declarations: [
    SelectedGridBoxDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [SelectedGridBoxDirective]
})
export class SharedModule { }
