import {Square} from '../square/models/Square';
import {Point} from '../transformations/Point';

export class Playground {
  public squares = [];
  public squareSize: number;
  public width: number;
  public dimensions: Point;

  toArray() {
    return this.squares.reduce((a, b) => {
      return a.concat(b);
    });
  }

  constructor() {
    this.generateGround(11, 10);
  }

  generateGround(x: number, y: number) {
    console.log(x, y)
    for (let cx = 0; cx < x; cx++ ) {
      this.squares[cx] = [];
      for (let cy = 0; cy < y; cy++) {
        this.squares[cx][cy] = new Square(cx, cy, 20, 1);
      }
    }
    return this;
  }

  pop(x: number, y: number) {
    return this.squares[x][y].pop();
  }
}
