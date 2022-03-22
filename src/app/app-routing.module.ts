import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard/list',
    pathMatch:'full'
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then(module => module.DashboardModule)
  },
  {
    path: 'pattern',
    loadChildren: () => import('./features/pattern/pattern.module').then(module => module.PatternModule)
  },
  {
    path: 'products',
    loadChildren: () => import('./features/product/product.module').then(module => module.ProductModule)
  },
  {
    path: 'timer',
    loadChildren: () => import('./features/timer/timer.module').then(module => module.TimerModule)
  },
  {
    path: 'timer-service',
    loadChildren: () => import('./features/timer-service/timer-service.module').then(module => module.TimerServiceModule)
  },
  {
    path: 'table',
    loadChildren: () => import('./features/table/table.module').then(module => module.TableModule)
  },
  {
    path: 'button',
    loadChildren: () => import('./features/button/button.module').then(module => module.ButtonModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
