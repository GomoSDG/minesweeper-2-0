import {ITransform} from './ITransform';

export class CompositeTransformation implements ITransform {
  transformations: ITransform[] = [];
  transform() {
    let transformations = '';
    for (const transformation of this.transformations) {
      transformations += transformation.transform() + '\n';
    }
    return transformations;
  }

  addTransformation(...transformations: ITransform[]) {
    for (const transform of transformations) {
      this.transformations.push(transform);
    }
  }
}
