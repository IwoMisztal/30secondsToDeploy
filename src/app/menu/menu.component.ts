import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import { DifficultyService } from './../difficulty.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  setDifficulty(level) {
    if (level === 'easy') {
      this.difficultyService.difficulty = 9;

    } else {
      this.difficultyService.difficulty = 99;
    }
    this.router.navigate(['board']);
  }

  constructor(private difficultyService: DifficultyService,
    private router: Router) { }

  ngOnInit() {
  }

}
