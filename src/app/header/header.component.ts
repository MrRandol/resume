import { Component } from '@angular/core';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { faSun as faSunReg, faMoon as faMoonReg } from '@fortawesome/free-regular-svg-icons';
import { Theme } from 'src/models/theme';
import { ThemeService } from 'src/services/theme.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  faSunSolid = faSun;
  faSunLine = faSunReg;
  faMoonSolid = faMoon;
  faMoonLine = faMoonReg;

  constructor(protected themeService: ThemeService) {}

  ngOnInit(): void {
    this.themeService.set(Theme.light)
  }

  availableThemes(): string[] {
    return Object.keys(Theme)
  }

  isLightTheme(): boolean {
    return this.themeService.activeTheme === Theme.light;
  }

  isDarkTheme(): boolean {
    return !this.isLightTheme();
  }

  switchToLightTheme() {
    this.themeService.set(Theme.light)
  }

  switchToDarkTheme() {
    this.themeService.set(Theme.dark)
  }

}
