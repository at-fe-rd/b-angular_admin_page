import { Component, OnInit, OnDestroy } from '@angular/core';
import { I18nService } from './core/service/i18n/i18n.service';

// Define list language for app
I18nService.SUPPORTED_LANGUAGES = [
  { code: 'en', title: 'English' },
  { code: 'ja', title: 'Japanese' },
  { code: 'vi', title: 'Vietnamese' }
];

// Set type active for current language
I18nService.ACTIVE_TYPE = 'selected';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

export class AppComponent implements OnInit {

  constructor(public i18n: I18nService) {
    //
  }

  ngOnInit() {
    //
  }

}
