import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { UpdateCounter } from '../../../models/counter.model';

@Component({
  selector: 'app-click-tracker',
  templateUrl: './click-tracker.component.html',
  styleUrls: ['./click-tracker.component.scss']
})
export class ClickTrackerComponent implements OnInit {

  @Input('counterTimeLogged')counterTimeLogged: UpdateCounter[] = [] as UpdateCounter[];

  pausedCount: number = 0;
  resumedCount: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  getPausedCounter(data: UpdateCounter[]): number {
    return data.filter(action => action.isTimerPaused).length;
  }

  getResumedCount(data: UpdateCounter[]): number {
    return data.filter(action => !action.isTimerPaused).length;
  }

}
