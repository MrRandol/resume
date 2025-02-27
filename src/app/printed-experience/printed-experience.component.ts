import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-printed-experience',
  templateUrl: './printed-experience.component.html',
  styleUrls: ['./printed-experience.component.scss']
})
export class PrintedExperienceComponent {
  @Input('displayMonth') displayMonth: Boolean = true;
  @Input('displayLogo') displayLogo: Boolean = true;
  @Input('displayEndDate') displayEndDate: Boolean = true;

  @Input('startDate') startDate: Date;
  @Input('endDate') endDate: Date;

  @Input('logo') logo: string;
  @Input('place') place: string;
  @Input('title') title: string;
  @Input('summary') summary: string;
  @Input('location') location: string;

  @Input('url') url: string;

  @Input('isLast') isLast: boolean;
}
