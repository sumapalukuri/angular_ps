import { Component } from '@angular/core';
import { TimerService } from '../../service/timer.service';

@Component({
  selector: 'app-time-logger',
  templateUrl: './time-logger.component.html',
  styleUrls: ['./time-logger.component.scss']
})
export class TimeLoggerComponent {

  constructor(public timerSevice: TimerService) { }

}
