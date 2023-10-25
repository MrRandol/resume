import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ResumeTranslationLoader } from './resumeTranslationLoader';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BasicsComponent } from './basics/basics.component';
import { WorkComponent } from './work/work.component';
import { EducationComponent } from './education/education.component';
import { CertificatesComponent } from './certificates/certificates.component';
import { SkillsComponent } from './skills/skills.component';
import { HttpClientModule } from '@angular/common/http';
import { GithubImagePipe } from 'src/pipes/githubImage.pipe';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { ScrollSectionDirective } from 'src/app/scroll/scroll-section-directive';
import { ScrollAnchorDirective } from 'src/app/scroll/scroll-anchor-directive';
import { ScrollManagerDirective } from 'src/app/scroll/scroll-manager-directive';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MarkdownModule } from 'ngx-markdown';
import { JoinStringArrayPipe } from 'src/pipes/joinStringArray.pipe';
import { ExperienceComponent } from './experience/experience.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { TranslationFlagPipe } from 'src/pipes/translationFlag';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTooltipModule} from '@angular/material/tooltip';
import { AppRoutingModule } from './app.route';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BasicsComponent,
    WorkComponent,
    EducationComponent,
    CertificatesComponent,
    SkillsComponent,
    ExperienceComponent,
    SpinnerComponent,
    ScrollSectionDirective,
    ScrollManagerDirective,
    ScrollAnchorDirective,
    TranslationFlagPipe,
    GithubImagePipe,
    JoinStringArrayPipe
  ],
  imports: [
    MatTooltipModule,
    BrowserModule,
    HttpClientModule,
    FontAwesomeModule,
    AppRoutingModule,
    MarkdownModule.forRoot(),
    TranslateModule.forRoot({
      loader: {provide: TranslateLoader, useClass: ResumeTranslationLoader}
  }),
    BrowserAnimationsModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
