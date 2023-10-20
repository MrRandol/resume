import { Component, Input } from '@angular/core';
import { Basics } from 'src/models/resume';
import { faAngular, faGithub, faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faCircleQuestion, faCode, faEnvelope, faFilePdf, faPrint } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  @Input('basics') basics: Basics;
  faAngular = faAngular;
  faCode = faCode;
  faEnvelope = faEnvelope
  faPrinter = faPrint;
  faQuestion = faCircleQuestion;
  faPdf = faFilePdf;

  icons = {
    "twitter": faXTwitter,
    "github": faGithub,
    "linkedin": faLinkedin
  }
}
