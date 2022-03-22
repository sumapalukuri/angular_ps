import { Component } from '@angular/core';
import { TimerService } from '../../service/timer.service';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent {

  constructor(
    public timerService: TimerService
  ) { }

}
