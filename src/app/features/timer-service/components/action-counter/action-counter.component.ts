import { Component } from '@angular/core';
import { TimerService } from '../../service/timer.service';

@Component({
  selector: 'app-action-counter',
  templateUrl: './action-counter.component.html',
  styleUrls: ['./action-counter.component.scss']
})
export class ActionCounterComponent {

  constructor(public timerService: TimerService) { }


}
