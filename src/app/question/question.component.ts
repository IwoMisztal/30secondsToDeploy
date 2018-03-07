import { Component, OnInit } from '@angular/core';
import {MenuComponent} from './../menu/menu.component';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  question: string;
  Qanswer: number;
  num1: number;
  num2: number;

  generateQuestion(min, max) {
    this.num1 = this.getRandomNumber(min, max);
    this.num2 = this.getRandomNumber(min, max);

    this.Qanswer = this.num1 + this.num2;
    this.question = '<div>' + this.num1 + '</div>' + '+' + this.num2;
    console.log(this.question);
  }

  getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  constructor() { }

  ngOnInit() {

  }

}
