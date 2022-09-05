import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss']
})
export class TopNavComponent implements OnInit {
  menu = [
    { routerLink: '', label: 'Home' },
    { routerLink: 'bingo', label: 'Bingo' }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
