import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
})
export class GridComponent implements OnInit {
  @Input() grid: string[][] = [];
  gridHeaders = 'BINGO'.split('');

  constructor() {}

  ngOnInit(): void {}
}
