import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatternComponent } from './components/pattern/pattern.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'display-pattern',
    pathMatch:'full'
  },
  {
    path: 'display-pattern',
    component: PatternComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatternRoutingModule { }
