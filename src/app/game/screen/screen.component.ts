import { Component, OnInit } from '@angular/core';
import {Playground} from '../Minesweeper/Playground';
import {ISquare, Square} from '../square/models/Square';

@Component({
  selector: 'app-screen',
  templateUrl: './screen.component.html',
  styleUrls: ['./screen.component.css']
})
export class ScreenComponent implements OnInit {
  public squareSize = 20;
  gameObjects: Square[] = [];
  private playground: Playground;

  constructor() { }

  ngOnInit() {
    this.playground = new Playground;
    this.gameObjects = this.playground.toArray();
  }


  click(e, x, y) {
    console.log(e.button);
    if (e.button === 2) {
      this.playground.toggleFlag(x, y);
      // e.stopImmediatePropagation();
    } else {
      this.playground.pop(x, y);
    }

  }

}
