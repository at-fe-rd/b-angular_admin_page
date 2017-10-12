import { Routes } from '@angular/router';

export const utilitiesRoutes: Routes = [
  {
    path: 'utilities',
    loadChildren: 'app/features/utilities/utilities.module#UtilitiesModule'
  }
];
