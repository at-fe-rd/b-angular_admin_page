import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/module/shared.module';
import { UtilitiesComponent } from './utilities.component';

const routes: Routes = [
  {
    path: '',
    component: UtilitiesComponent
  },
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [UtilitiesComponent]
})
export class UtilitiesModule { }
