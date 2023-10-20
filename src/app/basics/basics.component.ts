import { Component, Input } from '@angular/core';
import { faGithub, faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { Basics } from 'src/models/resume';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styleUrls: ['./basics.component.scss']
})

export class BasicsComponent {
  @Input('basics') basics: Basics;
  faEnveloppe = faEnvelope;
  faMapPin = faLocationDot;

  icons = {
    "twitter": faXTwitter,
    "github": faGithub,
    "linkedin": faLinkedin
  }

  isProfileImageLoading = true;

  hideLoader() {
    this.isProfileImageLoading = false;
  }

}
