import {Square} from '../square/models/Square';
import {Point} from '../transformations/Point';

export class Playground {
  public squares = [];
  public squareSize: number;
  public width: number;
  public dimensions: Point;
  private groundWidth: number;
  private groundHeight: number;

  toArray() {
    return this.squares.reduce((a, b) => {
      return a.concat(b);
    });
  }

  constructor() {
    this.groundWidth = 11, this.groundHeight = 10;
    this.generateGround(this.groundWidth, this.groundHeight);
    this.generateMines(25);
    this.generateNumbers();
  }

  generateGround(x: number, y: number) {
    for (let cx = 0; cx < x; cx++ ) {
      this.squares[cx] = [];
      for (let cy = 0; cy < y; cy++) {
        this.squares[cx][cy] = new Square(cx, cy, 20, 1);
      }
    }
    return this;
  }

  generateMines(num: number) {
    for (let x = 0; x < num; ) {
      const posX = Math.floor(Math.random() * this.groundWidth);
      const posY = Math.floor(Math.random() * this.groundHeight);

      if (this.squares[posX][posY].putMine()) {
        x++;
      }
    }
  }

  pop(x: number, y: number) {
    return this.squares[x][y].pop();
  }

  toggleFlag(x: number, y: number) {
    return this.squares[x][y].toggleFlag();
  }

  private generateNumbers() {
    for (const square of this.toArray()) {
      try {
        const x = square.col;
        const y = square.row;

        square.surroundingMines = this.countMines(square);
      } catch (e) {
        console.log('not a block');
      }
    }
  }

  private countMines(square: Square): number {
    const minX = square.col - 1;
    const minY = square.row - 1;
    let count = 0;

    for (let y = minY; y < minY + 3; y++) {
      if (y < 0 || y > this.squares[0].length - 1) {
        continue;
      }

      for (let x = minX; x < minX + 3; x++) {
        if ((square.col === x && square.row === y) || (x < 0 || x > this.squares.length - 1)) {
          continue;
        }

        count = this.squares[x][y].hasMine ? count + 1 : count;
      }
    }

    return count;
  }
}
