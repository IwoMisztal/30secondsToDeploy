import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { AppComponent } from './app.component';
import { BoardComponent } from './board/board.component';
import { QuestionComponent } from './question/question.component';
import { TimerComponent } from './timer/timer.component';
import { RegistrationComponent } from './registration/registration.component';
import { Routes, RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { MenuComponent } from './menu/menu.component';
import { LostscreenComponent } from './lostscreen/lostscreen.component';
import { WonComponent } from './won/won.component';
import { FormsModule } from '@angular/forms';
import { Http } from '@angular/http';
import {Subscription} from 'rxjs/Subscription';
import { FinalscoreService } from './finalscore.service';
import { DifficultyService } from './difficulty.service';

const appRoutes: Routes = [
  { path: '', component: MenuComponent },
  { path: 'lostscreen', component: LostscreenComponent },
  { path: 'winscreen', component: WonComponent },
  { path: 'board', component: BoardComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    QuestionComponent,
    TimerComponent,
    RegistrationComponent,
    MenuComponent,

    LostscreenComponent,
    WonComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    FinalscoreService,
    DifficultyService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
