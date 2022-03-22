import { Component, OnInit } from '@angular/core';
import { UpdateCounter } from '../../models/counter.model';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {
  
  counter: number = 0;
  updateCounter!: UpdateCounter;
  pausedCounterValue!: number[];
  counterTimeLogged: UpdateCounter[] = []

  constructor() { }

  ngOnInit(): void {
  }

  getCounterValue(timerValue: number): void {
    this.counter = timerValue;
  }

  checkTimerPaused(updateCounter: UpdateCounter): void {
    this.updateCounter = updateCounter;
  }

  getPausedCounterValue(counterValue: number[]): void {
    this.pausedCounterValue = counterValue;
  }

  getCounterTimerLogged(timerLogged: UpdateCounter[]) {
    this.counterTimeLogged = timerLogged;
  }

}
