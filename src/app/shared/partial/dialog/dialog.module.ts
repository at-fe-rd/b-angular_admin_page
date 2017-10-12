import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { DialogComponent } from './dialog.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule,
  ],
  declarations: [DialogComponent],
  exports: [DialogComponent]
})
export class DialogModule { }
