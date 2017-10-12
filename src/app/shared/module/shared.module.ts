import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LoadingDirective } from '../directive/loading/loading.directive';
import { BreadcrumbModule } from '../layout/breadcrumb/breadcrumb.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    TranslateModule,
    BreadcrumbModule
  ],
  declarations: [
    LoadingDirective
  ],
  exports: [
    LoadingDirective,
    BreadcrumbModule,
    RouterModule,
    TranslateModule,
    CommonModule,
    FormsModule
  ]
})
export class SharedModule { }
