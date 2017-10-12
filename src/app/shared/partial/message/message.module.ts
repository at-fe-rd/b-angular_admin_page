import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { MessageComponent } from './message.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule
  ],
  declarations: [MessageComponent],
  exports: [MessageComponent]
})
export class ErrorModule { }
