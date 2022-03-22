import { Component } from '@angular/core';
import { TimerService } from '../../service/timer.service';

@Component({
  selector: 'app-start-timer',
  templateUrl: './start-timer.component.html',
  styleUrls: ['./start-timer.component.scss']
})
export class StartTimerComponent {

  counterValue: number = 0;
  isStart: boolean = true;
  isPaused: boolean = false;

  constructor(
    private _timerService: TimerService
  ) { }

  onStart(): void {
    this.isStart = false;
    this._timerService.setCounterValue(this.counterValue);
  }

  onPause(): void {
    this.isStart = false;
    this.isPaused = true;
    this._timerService.pauseCounter();
  }

  onResume(): void {
    this.isStart = false;
    this.isPaused = false;
    this._timerService.resumeCounter();
  }

  onReset(): void {
    this.counterValue = 0;
    this.isStart = true;
    this.isPaused = false;
    this._timerService.setCounterValue(this.counterValue);
    this._timerService.resetCounter();
  }

}
