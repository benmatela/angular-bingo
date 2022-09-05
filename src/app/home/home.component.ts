import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  pageRows = [
    { header: 'This is thee best bingo game in the world!', imgUrl: 'assets/svg/game.svg' }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
