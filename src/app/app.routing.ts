import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { authRoutes } from './auth/auth.routing';
import { featureRoutes } from './features/feature.routing';

const routes: Routes = [
  ...authRoutes,
  ...featureRoutes
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      //preloadingStrategy: PreloadAllModules
    })
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
