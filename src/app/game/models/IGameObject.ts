export interface IGameObject {
  x: number;
  y: number;
  width: number;
  height: number;
  template: string;
  getTransformations();
  update();
}
