import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DynamicButtonComponent } from './components/dynamic-button/dynamic-button.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch:'full'
  },
  {
    path: 'list',
    component: DynamicButtonComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ButtonRoutingModule { }
