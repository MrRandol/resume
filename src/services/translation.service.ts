import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TranslationService {
  readonly storageKey = 'translation-preference'

  private activeTranslationSubject = new BehaviorSubject<string | undefined>(undefined);

  constructor(private translate: TranslateService) {
    // this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang('en');

    // use local storage, preferred language or default to en
    if (!this.activeTranslation) {
      var lang = this.getLocalePreference();
      lang = lang ? lang : 'en';
      this.set(lang);
    } else {
      this.set(this.activeTranslation);
    }
  }

  get activeTranslation(): string | undefined {
    return this.activeTranslationSubject.getValue();
  }

  getLocalePreference = () => {
    if (localStorage.getItem(this.storageKey))
      return localStorage.getItem(this.storageKey)
    else if (/^fr\b/.test(navigator.language)) {
      return 'fr'
    } else
      return 'en'
  }

  set(locale: string): void {
    this.activeTranslationSubject.next(locale);
    localStorage.setItem(this.storageKey, locale)
    this.translate.use(locale);
  }
}
