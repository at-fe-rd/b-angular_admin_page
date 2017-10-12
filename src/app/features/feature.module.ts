import { NgModule } from '@angular/core';
import { FeatureComponent } from './feature.component';
import { CoreModule } from '../core/module/core.module';
import { HeaderModule } from '../shared/layout/header/header.module';
import { SidebarModule } from '../shared/layout/sidebar/sidebar.module';
import { FooterModule } from '../shared/layout/footer/footer.module';
import { Routes, RouterModule } from '@angular/router';
import { DialogModule } from '../shared/partial/dialog/dialog.module';
import { ErrorModule } from '../shared/partial/message/message.module';
import { ProgressBarModule } from '../shared/partial/progress-bar/progress-bar.module';

@NgModule({
  imports: [
    CoreModule,
    RouterModule,
    HeaderModule,
    SidebarModule,
    FooterModule,
    DialogModule,
    ErrorModule,
    ProgressBarModule
  ],
  declarations: [
    FeatureComponent
  ]
})

export class FeatureModule { }
