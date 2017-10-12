import { Routes } from '@angular/router';
import { FeatureComponent } from './feature.component';
import { AuthGuard } from '../core/service/auth/auth-guard';
import { dashboardRoutes } from './dashboard/dashboard.routing';
import { serviceRoutes } from './service/service.routing';
import { utilitiesRoutes } from './utilities/utilities.routing';

export const featureRoutes: Routes = [
  {
    path: '',
    component: FeatureComponent,
    canActivate: [AuthGuard],
    children: [
      ...dashboardRoutes,
      ...serviceRoutes,
      ...utilitiesRoutes,
      {
        path: '**',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      }
    ]
  }
];
