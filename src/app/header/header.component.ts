import { Component, ElementRef, ViewChild } from '@angular/core';
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

  @ViewChild("themeIcon", {read: ElementRef, static: true}) themeIcon: ElementRef;


  faSunSolid = faSun;
  faSunLine = faSunReg;
  faMoonSolid = faMoon;
  faMoonLine = faMoonReg;

  constructor(protected themeService: ThemeService) {}

  toggleTheme() {
    this.themeService.toggle();
  }

  get currentTheme() {
    return this.themeService.activeTheme;
  }


}
