import { Component, OnInit, Injectable, Input, Output, NgModule, EventEmitter, ElementRef, ViewChild } from '@angular/core';
import {QuestionComponent} from './../question/question.component';
import {TimerComponent} from './../timer/timer.component';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { FinalscoreService } from '../finalscore.service';
import { DifficultyService } from './../difficulty.service';


@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./../app.component.css']
})
@Injectable()
export class BoardComponent implements OnInit {
  timeLeft: number;
  bigTick: number;
  gameOver: boolean;
  gameWon: boolean;
  @ViewChild('answerField') el: ElementRef;

  textValue = '';
  answer: number;
  score: number;
  question: string;
  Qanswer: number;
  q: QuestionComponent;
  timer: TimerComponent;
  miss: number;

  difficulty: number;


  bigTimer() {
    console.log(this);
    this.bigTick = 30;
    const that = this;
    function decrementSecond() {
      if (that.bigTick < 1 && that.gameOver === false) {
        that.gameWon = true;
        that.timer.counterPause();
        that.finalscoreServive.score = that.score;
        that.router.navigate(['winscreen']);
      } else {
      setTimeout(() => {

        that.bigTick--;
        decrementSecond();
      }, 1000);
    }
  }

    decrementSecond();
  }




  setAnswer(ans) {

    this.answer = ans.value;
    if (this.answer == this.Qanswer) {
      this.score += 10;
      ans.value = '';
      this.timer.counterPause();
      this.generateQuestion();
    }
  }







generateQuestion() {
  if (this.gameOver === false) {
  this.timer = new TimerComponent();
  this.q = new QuestionComponent();
  console.log(this.difficulty);
  this.q.generateQuestion(1, this.difficulty);
  this.question = this.q.question;
  this.Qanswer = this.q.Qanswer;
  this.timer.counter();
  this.checkTime();
  }
}

checkTime() {
  setTimeout(() => {
    if (this.timer.count < 1) {
      if (this.miss > 2) {
        this.gameOver = true;
        this.router.navigate(['lostscreen']);
      } else { this.miss += 1; }
      this.el.nativeElement.value = '';
      this.timer.counterPause();
      this.generateQuestion();
    } else {
      this.checkTime();
    }
  }, 1000);
}


  constructor(private router: Router,
    private finalscoreServive: FinalscoreService,
    private difficultyService: DifficultyService) {

  }


  ngOnInit() {
    this.difficulty = this.difficultyService.passDifficulty();
    this.gameOver = false;
    this.bigTimer();
    this.score = 0;
    this.miss = 0;
    this.generateQuestion();
  }

}
