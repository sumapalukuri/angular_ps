import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TimerServiceRoutingModule } from './timer-service-routing.module';
import { TimeLoggerComponent } from './components/time-logger/time-logger.component';
import { CounterComponent } from './components/counter/counter.component';
import { StartTimerComponent } from './components/start-timer/start-timer.component';
import { ActionCounterComponent } from './components/action-counter/action-counter.component';
import { SetupCounterComponent } from './components/setup-counter/setup-counter.component';
import { MaterialModule } from 'src/app/shared/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    TimeLoggerComponent,
    CounterComponent,
    StartTimerComponent,
    ActionCounterComponent,
    SetupCounterComponent
  ],
  imports: [
    CommonModule,
    TimerServiceRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    SharedModule
  ]
})
export class TimerServiceModule { }
