import {IGameObject} from './IGameObject';
import {ITransform} from '../../transformations/ITransform';

export class GameObject implements IGameObject {
  public height: number;
  public template: string;
  public width: number;
  public x: number;
  public y: number;
  private transformations: ITransform[] = [];

  public addTransformation(transformation: ITransform) {
    this.transformations.push(transformation);
  }

  public getTransformations() {
  }

  public update() {
  }
}
