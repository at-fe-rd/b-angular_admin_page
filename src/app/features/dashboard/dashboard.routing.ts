import { Routes } from '@angular/router';

export const dashboardRoutes: Routes = [
  {
    path: 'dashboard',
    loadChildren: 'app/features/dashboard/dashboard.module#DashboardModule'
  }
];
