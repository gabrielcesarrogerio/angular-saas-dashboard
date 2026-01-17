import { Routes } from '@angular/router';
import { LayoutComponent } from './core/layout/layout';
import { DashboardComponent } from './features/dashboard/dashboard';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: DashboardComponent
      }
    ]
  }
];
