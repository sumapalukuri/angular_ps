import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UpdateCounter } from '../../../models/counter.model';

@Component({
  selector: 'app-input-timer',
  templateUrl: './input-timer.component.html',
  styleUrls: ['./input-timer.component.scss']
})
export class InputTimerComponent implements OnInit {

  @Output('timerValue') timerValue = new EventEmitter();
  @Output('timerPaused') timerPaused = new EventEmitter();
  @Output('counterTimeLogger') counterTimeLogger = new EventEmitter();
  @Input('pausedCounterValue') pausedCounterValue!: number[];

  counterValue: number = 0;
  changeToPause: boolean = false;
  isStart: boolean = true;
  pauseCounter: number = 0;
  resumeCounter: number = 0;
  counterTracker: UpdateCounter[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  onStartCounter(): void {
    this.isStart = false;
    this.changeToPause = true;
    this.timerValue.emit(this.counterValue);
  }

  onPauseCounter(): void {
    this.isStart = false;
    this.changeToPause = false;
    const updateCounter : UpdateCounter = {
      isTimerPaused: true,
      timeStamp: new Date(),
      pausedCount: this.pauseCounter+1,
      resumedCount: this.resumeCounter
    }
    this.counterTracker.push(updateCounter);
    this.counterTimeLogger.emit(this.counterTracker);
    this.timerPaused.emit(updateCounter); 
  }

  onResumeCounter(): void {
    this.isStart = false;
    this.changeToPause = true;
    const updateCounter : UpdateCounter = {
      isTimerPaused: false,
      timeStamp: new Date(),
      resumedCount: this.resumeCounter+1,
      pausedCount: this.pauseCounter
    }
    this.counterTracker.push(updateCounter);
    this.counterTimeLogger.emit(this.counterTracker);
    this.timerPaused.emit(updateCounter)
  }

}
