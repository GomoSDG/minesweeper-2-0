import {ITransform} from './ITransform';
import {Point} from './Point';

export class RotateTransformation implements ITransform {
  public Origin: Point;
  public angle: number;
  private hasOrigin: boolean;

  constructor(angle: number) {
    this.angle = angle;
  }

  setOrigin(origin: Point) {
    this.hasOrigin = true;
    this.Origin = origin;
  }

  transform() {
    if (this.hasOrigin) {
      return `rotate(${this.angle},${this.Origin.toString()})`;
    }

    return `rotate(${this.angle})`;
  }
}
