import { Component, Input } from '@angular/core';
import { Education } from 'src/models/resume';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent {
  @Input('education') education: Education[];

}
