import { Component, Input } from '@angular/core';
import { Experience } from 'src/models/resume';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {

  @Input('displayMonth') displayMonth: Boolean = true;
  @Input('displayLogo') displayLogo: Boolean = true;
  @Input('displayEndDate') displayEndDate: Boolean = true;

  @Input('startDate') startDate: Date;
  @Input('endDate') endDate: Date;

  @Input('logo') logo: string;
  @Input('place') place: string;
  @Input('title') title: string;
  @Input('summary') summary: string;

  @Input('url') url: string;

  @Input('isLast') isLast: boolean;

}
