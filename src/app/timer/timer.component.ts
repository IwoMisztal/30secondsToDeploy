import { Component, OnInit, NgModule } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {

  ccount: number;
  t: any;
  count: any;
  timeLast: any;



  counter() {
    if (this.count === 0) {
      console.log('time left');
    } else {
      this.count -= 1;
      console.log(this.count);
      this.t = setTimeout(() => {
        this.counter();
      }, 1000);

    }
  }

  counterPause() {
    clearTimeout(this.t);
  }

  counterReset() {
    this.count = 5;
    this.counterPause();
  }


  constructor() {
    this.counterReset();

  }

  ngOnInit() {

  }

}
