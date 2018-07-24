import {GameObject} from './GameObject';

export interface ISquare {
  hasFlag: boolean;
  hasMine: boolean;

  pop(): boolean;

  toggleFlag(): boolean;

  generatePosition(): void;

  putMine(): boolean;
}

export class Square extends GameObject implements ISquare {
  public hasFlag: boolean;
  public hasMine: boolean;
  protected col: number;
  protected size: number;
  protected margin: number;
  protected row: number;
  public surroundingMines: number;
  public popped: boolean;

  constructor (col: number, row: number, size: number, margin: number) {
    super();
    this.col = col;
    this.row = row;
    this.margin = margin;
    this.template = 'bordered_square';
    this.size = size;
    this.hasMine = false;
    this.popped = false;
    this.surroundingMines = Math.floor(Math.random() * 8) + 1;
    this.generatePosition();
  }

  generatePosition() {
    this.x = this.col * this.size + this.margin * this.col;
    this.y = this.row * this.size + this.margin * this.row;
  }

  pop(): boolean {
    if (this.hasMine && !this.hasFlag) {
      this.template = 'explode_square';
      this.popped = true;
    } else if (!this.hasFlag) {
      this.template = `${this.surroundingMines}square`;
      this.popped = true;
    }

    return this.hasMine && !this.hasFlag;
  }

  toggleFlag(): boolean {
    if (!this.popped) {
      if (!this.hasFlag) {
        this.template = 'flag_square';
      } else {
        this.template = 'mineSquare';
      }
      return this.hasFlag = !this.hasFlag;
  }
    return false;
  }

  putMine(): boolean {
    if (this.hasMine) {
      // Already has mine
      return false;
    }

    // Set mine true and change template;
    this.hasMine = true;
    this.template = 'mineSquare';

    // Put mine successfully.
    return true;
  }
}
