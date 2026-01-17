import { Routes } from '@angular/router';
import { LayoutComponent } from './core/layout/layout';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./features/dashboard/dashboard')
            .then(m => m.DashboardComponent)
      },
      {
        path: 'customers',
        loadComponent: () =>
          import('./features/customers/customers-list/customers-list')
            .then(m => m.CustomersListComponent)
      },
      {
        path: 'customers/:id',
        loadComponent: () =>
          import('./features/customers/customer-detail/customer-detail')
            .then(m => m.CustomerDetailComponent)
      }
    ]
  }
];
