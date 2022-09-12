import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appSelectedGridBox]'
})
export class SelectedGridBoxDirective {

  constructor(private el: ElementRef) { 
  
  }

}
