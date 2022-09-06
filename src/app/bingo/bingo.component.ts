import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bingo',
  templateUrl: './bingo.component.html',
  styleUrls: ['./bingo.component.scss'],
})
export class BingoComponent implements OnInit {
  grid: string[][] = [];
  balls: number[] = [];
  characters = 'BINGO';
  selectedBall = 0;
  bingoDraw = Array.from(Array(75).keys());
  gameOver = false;
  bingo = false;
  bitcoinImg = 'assets/svg/bitcoin.svg';

  constructor() {}

  ngOnInit(): void {
    this.generateInitialGrid();
    this.generateBalls();
  }

  onReset() {
    this.grid = [];
    this.gameOver = false;
    this.selectedBall = 0;
    this.bingoDraw = Array.from(Array(75).keys());
    this.generateInitialGrid();
    this.generateBalls();
  }

  /**
   * Initial display of the populated grid
   */
  generateInitialGrid() {
    for (let i = 0; i < 5; i++) {
      const row = [];
      for (let k = 0; k < 5; k++) {
        if (i === 2 && k === 2) {
          row.push('*');
        } else {
          row.push(`${Math.floor(Math.random() * 100)}`);
        }
      }
      this.grid.push(row);
    }
  }

  /**
   * Generate balls to draw from
   */
  generateBalls() {
    for (let index = 0; index < this.bingoDraw.length; index++) {
      this.balls.push(Math.floor(Math.random() * this.bingoDraw.length));
    }
  }

  onDraw() {
    if (this.balls.length > 1) {
      const random = Math.floor(Math.random() * this.balls.length);
      this.selectedBall = this.balls[random];
      this.balls.splice(random, 1);

      for (let i = 0; i < this.grid.length; i++) {
        const cards = this.grid[i];
        for (let j = 0; j < cards.length; j++) {
          const card = cards[j];
          if (Number(card) === this.selectedBall) {
            cards[j] = `*${cards[j]}`;
          }
        }
      }
    } else {
      this.gameOver = true;
    }

    this.bingo = this.getBingoVerticalRows;
  }

  get getBingoVerticalRows(): boolean {
    let result = false;
    for (let i = 0; i < this.grid.length; i++) {
      const cards = this.grid[i];
      for (let j = 0; j < cards.length; j++) {
        if (cards.every((card) => String(card).startsWith('*'))) {
          result = true;
        } else {
          result = false;
          break;
        }
      }
      if (result) {
        break;
      }
    }
    return result;
  }
}
