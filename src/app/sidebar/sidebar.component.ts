import { Component, Input } from '@angular/core';
import { Basics, Certificate, Skill } from 'src/models/resume';
import { faGithub, faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faLink, faLocationDot } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  @Input('basics') basics: Basics;
  @Input('skills') skills: Skill[];
  @Input('certifications') certifications: Certificate[];

  faEnveloppe = faEnvelope;
  faMapPin = faLocationDot;
  faLink = faLink;

  icons = {
    "twitter": faXTwitter,
    "github": faGithub,
    "linkedin": faLinkedin
  }
}