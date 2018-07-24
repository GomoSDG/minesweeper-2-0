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
  }

  generateGround(x: number, y: number) {
    console.log(x, y);
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
}
