import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MarksheetComponent } from './components/marksheet/marksheet.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'marksheet',
    pathMatch:'full'
  },
  {
    path: 'marksheet',
    component: MarksheetComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TableRoutingModule { }
