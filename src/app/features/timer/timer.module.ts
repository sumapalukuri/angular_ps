import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TimerRoutingModule } from './timer-routing.module';
import { TimerComponent } from './components/timer/timer.component';
import { CountDownTimerComponent } from './components/timer/count-down-timer/count-down-timer.component';
import { InputTimerComponent } from './components/timer/input-timer/input-timer.component';
import { TimestampLoggerComponent } from './components/timer/timestamp-logger/timestamp-logger.component';
import { ClickTrackerComponent } from './components/timer/click-tracker/click-tracker.component';
import { MaterialModule } from 'src/app/shared/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    TimerComponent,
    CountDownTimerComponent,
    InputTimerComponent,
    TimestampLoggerComponent,
    ClickTrackerComponent
  ],
  imports: [
    CommonModule,
    TimerRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    SharedModule
  ]
})
export class TimerModule { }
