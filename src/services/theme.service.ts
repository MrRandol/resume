import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Theme } from 'src/models/theme';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private activeThemeSubject = new BehaviorSubject<string | undefined>(
    undefined
  );
  activeTheme$ = this.activeThemeSubject.asObservable();

  get activeTheme(): string | undefined {
    return this.activeThemeSubject.getValue();
  }

  set(themeName: string): void {
    this.activeThemeSubject.next(themeName);
    document.documentElement.classList.remove(...Object.values(Theme));
    document.documentElement.classList.add(themeName);
  }
}
