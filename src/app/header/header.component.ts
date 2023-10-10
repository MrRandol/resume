import { TranslateService } from '@ngx-translate/core';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { faSun as faSunReg, faMoon as faMoonReg } from '@fortawesome/free-regular-svg-icons';
import { ThemeService } from 'src/services/theme.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  @ViewChild("themeIcon", {read: ElementRef, static: true}) themeIcon: ElementRef;

  availableLanguages = [
    {name: "Français", key: "fr", flag: "🇫🇷"},
    {name: "English", key: "en", flag: "🇬🇧"}
  ]

  faSunSolid = faSun;
  faSunLine = faSunReg;
  faMoonSolid = faMoon;
  faMoonLine = faMoonReg;

  constructor(protected themeService: ThemeService, protected i18nService: TranslateService) {}

  toggleTheme() {
    this.themeService.toggle();
  }

  get currentTheme() {
    return this.themeService.activeTheme;
  }

  toggleLanguage(lang: string) {
    this.i18nService.use(lang)
  }

  get currentLanguage(): string {
    return this.i18nService.currentLang;
  }
}
