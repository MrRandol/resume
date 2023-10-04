import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Theme } from 'src/models/theme';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  readonly storageKey = 'theme-preference'

  private activeThemeSubject = new BehaviorSubject<string | undefined>(undefined);

  constructor() {
    if (!this.activeTheme) {
      var theme = this.getColorPreference();
      theme = theme ? theme : Theme.light;
      this.set(theme);
    }
  }

  get activeTheme(): string | undefined {
    return this.activeThemeSubject.getValue();
  }

  getColorPreference = () => {
    if (localStorage.getItem(this.storageKey))
      return localStorage.getItem(this.storageKey)
    else
      return window.matchMedia('(prefers-color-scheme: dark)').matches
        ? Theme.dark
        : Theme.light
  }

  toggle() {
    let newTheme = this.activeTheme === Theme.dark ? Theme.light : Theme.dark;
    this.set(newTheme);
  }

  set(themeName: string): void {
    this.activeThemeSubject.next(themeName);
    localStorage.setItem(this.storageKey, themeName)
    document.documentElement.classList.remove(...Object.values(Theme));
    document.documentElement.classList.add(themeName);
  }
}
