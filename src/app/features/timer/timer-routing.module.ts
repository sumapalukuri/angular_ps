import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TimerComponent } from './components/timer/timer.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'countdown',
    pathMatch:'full'
  },
  {
    path: 'countdown',
    component: TimerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TimerRoutingModule { }
