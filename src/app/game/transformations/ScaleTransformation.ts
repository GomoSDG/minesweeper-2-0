import {ITransform} from './ITransform';

export class ScaleTransformation implements ITransform {
  public x: number;
  public y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  transform() {
    return `scale(${this.x}, ${this.y})`;
  }

}
