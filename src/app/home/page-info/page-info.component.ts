import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-info',
  templateUrl: './page-info.component.html',
  styleUrls: ['./page-info.component.scss']
})
export class PageInfoComponent implements OnInit {
  @Input() info: any;
  @Input() index = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
