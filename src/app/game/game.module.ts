import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScreenComponent } from './screen/screen.component';

@NgModule({
  imports: [
    CommonModule
  ],
  entryComponents: [
    ScreenComponent
  ],
  declarations: [ScreenComponent],
  exports: [ScreenComponent]
})
export class GameModule { }
