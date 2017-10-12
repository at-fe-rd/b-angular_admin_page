import { Routes } from '@angular/router';

export const serviceRoutes: Routes = [
  {
    path: 'service',
    loadChildren: 'app/features/service/service.module#ServiceModule'
  }
];
