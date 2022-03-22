import { Injectable } from '@angular/core';
import { BehaviorSubject, interval } from 'rxjs';
import { TimerModel } from '../models/timer.model';

@Injectable({
  providedIn: 'root'
})
export class TimerService {

  public counterInput$: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  public decreementCounter$: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  public resumedAndPausedData$: BehaviorSubject<TimerModel[]> = new BehaviorSubject<TimerModel[]>([] as TimerModel[])
  
  counterValue!: number;
  _subsription!: any;
  counterData: TimerModel[] = [];

  constructor() { }

  setCounterValue(value: number): void {
    this.counterInput$.next(value);
    this.getCounterValue();
    this.startCounter()
  }

  getCounterValue(): void {
    this.counterInput$.subscribe(response => this.counterValue = response);
  }

  startCounter(): void {
    const countDownimer = interval(1000);
    this._subsription = countDownimer.subscribe((response) => {
      if(this.counterValue > 0) {
        this.counterValue --;
        this.decreementCounter$.next(this.counterValue)
      }
    })
  }

  pauseCounter(): void {
    this.pauseOrResume(true, false);
    this._subsription.unsubscribe();
  }

  resumeCounter(): void {
    this.pauseOrResume(false, true);
    this.startCounter();
  }

  resetCounter(): void {
    this.counterValue = 0;
    this.counterData = [];
    this.resumedAndPausedData$.next([]);
    this.counterInput$.next(0);
    this._subsription.unsubscribe();
    this.decreementCounter$.next(this.counterValue);
  }

  setCounterData(value: TimerModel[]): void {
    this.resumedAndPausedData$.next(value);
  }

  pauseOrResume(pause: boolean, resume: boolean): void {
    const counterDataTimeStamp: TimerModel = {
      counterValue: this.counterValue,
      timeStamp: new Date(),
      isPaused: pause,
      isResumed: resume
    }
    this.counterData.push(counterDataTimeStamp);
    this.setCounterData(this.counterData);
  }

  getPausedCount(data: TimerModel[]): number {
    return data.filter(action => action.isPaused).length;
  }

  getResumedCount(data: TimerModel[]): number {
    return data.filter(action => action.isResumed).length;
  }

}
