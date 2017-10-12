import { NgModule } from '@angular/core';
import { SharedModule } from '../../module/shared.module';
import { FooterComponent } from './footer.component';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [FooterComponent],
  exports: [FooterComponent]
})
export class FooterModule { }
