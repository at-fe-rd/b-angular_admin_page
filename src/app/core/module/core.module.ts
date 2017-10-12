import { NgModule, ModuleWithProviders, Optional, SkipSelf } from '@angular/core';
import { AuthService } from '../service/auth/auth.service';
import { I18N_PROVIDERS } from '../service/i18n/i18n.service';
import { API_PROVIDERS } from '../service/api/api.service';
import { NOTIFICATION_PROVIDERS } from '../service/notification/notification.service';
import { AuthGuard } from '../service/auth/auth-guard';

const AUTH_PROVIDERS = [
  AuthService,
  AuthGuard
];

@NgModule({
  imports: [],
  declarations: [],
  exports: []
})
export class CoreModule {
  constructor (@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only');
    }
  }

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [API_PROVIDERS, AUTH_PROVIDERS, I18N_PROVIDERS, NOTIFICATION_PROVIDERS]
    };
  }
}
