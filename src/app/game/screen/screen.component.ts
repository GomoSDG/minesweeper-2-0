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
  private audioDict = {};
  private playground: Playground;

  constructor() { }

  ngOnInit() {
    this.playground = new Playground;
    this.gameObjects = this.playground.toArray();
    this.audioDict['explosion'] = new Audio();
    this.audioDict['explosion'].src = '../../../assets/sounds/explosion.ogg';
    this.audioDict['explosion'].load();
  }


  mouseup(e, x, y) {
    if (e.button === 2) {
      // Can have sounds for when pitching flag.
      this.playground.toggleFlag(x, y);
    } else {
      if (this.playground.pop(x, y)) {
        this.audioDict['explosion'].play();
        for (const mine of this.playground.toArray()) {
          if (mine.hasMine && mine.col !== x && mine.row !== y) {
            mine.reveal(false);
          }
        }
      }
    }
  }

  mousedown(e, x, y) {

  }

}
