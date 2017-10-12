import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { TranslateLoader, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

@Injectable()
/**
 * This class provides the Internationalization service with methods to :
 * Define supported languages
 * Handling switch language
 * Handling language displayed and storage
 * Read supported languages
 **/
export class I18nService {

  // default supported languages
  public static SUPPORTED_LANGUAGES: Array<any> = [];
  public static ACTIVE_TYPE: string;
  public usedLang: string;

  constructor(public translate: TranslateService) {
    // Get current lang from localstorage
    let _currentLang = this.getCurrentLang();

    // Default is English
    this.usedLang = _currentLang === null ? 'en' : _currentLang;
    this.setLang();
  }

  /**
   * Handling switch language
   **/
  switchLang(lang: any) {
    this.usedLang = lang;
    this.setLang();
  }

  /**
   * Handling language display and storage
   **/
  setLang() {
    this.translate.use(this.usedLang);
    // Set current lang to localstorage
    localStorage.setItem('lang', this.usedLang);

    let index = I18nService.SUPPORTED_LANGUAGES.findIndex((item) => item.code === this.usedLang);
    if (index !== -1) {
      I18nService.SUPPORTED_LANGUAGES[index]['active'] = I18nService.ACTIVE_TYPE;
    }
  }

  /**
   * Get supported languages
   **/
  getLangs() {
    return I18nService.SUPPORTED_LANGUAGES;
  }

  /**
   * Get current language
   */
  getCurrentLang() {
    return localStorage.getItem('lang');
  }

  getLanguageItem(key: any, params: any = null) {
    let item: any;
    this.translate.get(key, params).subscribe((res: any) => {
      item = res;
    });
    return item;
  }
}

export const I18N_PROVIDERS: any[] = [
  I18nService
];
