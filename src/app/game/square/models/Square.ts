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
  col: number;
  protected size: number;
  protected margin: number;
  row: number;
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
    this.surroundingMines = 0;
    this.generatePosition();
  }

  generatePosition() {
    this.x = this.col * this.size + this.margin * this.col;
    this.y = this.row * this.size + this.margin * this.row;
  }

  pop(): boolean {
    if (!this.hasFlag) {
      this.reveal(true);
      this.popped = true;
    }

    return this.hasMine && !this.hasFlag;
  }

  reveal(pop: boolean): void {
    if (this.hasMine) {
      if (pop) {
        this.template = 'explode_square';
      } else {
        this.template = 'mineSquare';
      }
    } else {
      this.template = `${this.surroundingMines}square`;
    }
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

    // Set hasMine true and change template.
    this.hasMine = true;

    // Put mine successfully.
    return true;
  }
}
