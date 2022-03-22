import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SetupCounterComponent } from './components/setup-counter/setup-counter.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'counter',
    pathMatch:'full'
  },
  {
    path: 'counter',
    component: SetupCounterComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TimerServiceRoutingModule { }
