import { AfterViewInit, Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { UpdateCounter } from '../../../models/counter.model';

@Component({
  selector: 'app-count-down-timer',
  templateUrl: './count-down-timer.component.html',
  styleUrls: ['./count-down-timer.component.scss']
})
export class CountDownTimerComponent implements OnInit,OnChanges{

@Input('counterValue') counterValue!: number;
@Input('updateCounter') updateCounter: UpdateCounter = {} as UpdateCounter;
@Output('pausedCounterValue') pausedCounterValue = new EventEmitter();

pausedConterValues:number[] = [];
interval: any;

  constructor() { }

  ngOnInit(): void {

  }

  ngOnChanges(changes: SimpleChanges): void {
    if(this.counterValue > 0 && !this.updateCounter?.isTimerPaused) {
      this.interval = setInterval(() => this.counterValue--, 1000);
    } 
    if(this.updateCounter?.isTimerPaused) {
      this.pausedConterValues.push(this.counterValue);
      this.pausedCounterValue.emit(this.pausedConterValues);
      clearInterval(this.interval)
    }
  }




}
