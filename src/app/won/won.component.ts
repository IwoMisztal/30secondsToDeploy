import { Component, ViewChild, OnInit, Input } from '@angular/core';
import {Router} from '@angular/router';
import {BoardComponent} from './../board/board.component';
import { FinalscoreService } from '../finalscore.service';





@Component({
  selector: 'app-won',
  templateUrl: './won.component.html',
  styleUrls: ['./won.component.css'],

})
export class WonComponent implements OnInit {

  @ViewChild(BoardComponent) child;

  score: number;

  constructor(private finalscoreServive: FinalscoreService) { }

  ngOnInit() {
    this.score = this.finalscoreServive.score;
  }

}
