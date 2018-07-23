import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScreenComponent } from './screen/screen.component';
import { SquareComponent } from './square/square.component';

@NgModule({
  imports: [
    CommonModule
  ],
  entryComponents: [
    ScreenComponent,
    SquareComponent
  ],
  declarations: [ScreenComponent, SquareComponent],
  exports: [ScreenComponent, SquareComponent]
})
export class GameModule { }
