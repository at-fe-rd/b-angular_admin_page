import { NgModule } from '@angular/core';
import { SharedModule } from '../../module/shared.module';
import { HeaderComponent } from './header.component';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [HeaderComponent],
  exports: [HeaderComponent]
})
export class HeaderModule { }
