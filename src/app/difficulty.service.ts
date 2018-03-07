import { Injectable } from '@angular/core';
import { MenuComponent } from './menu/menu.component';
import { BoardComponent } from './board/board.component';

@Injectable()
export class DifficultyService {
difficulty: number;


  getDifficulty(diff) {
    this.difficulty = diff;
  }

  passDifficulty(): number {
    return this.difficulty;
  }


  constructor() { }

}
