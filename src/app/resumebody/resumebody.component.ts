import { Component, Input } from '@angular/core';
import { Resume } from 'src/models/resume';

@Component({
  selector: 'app-resumebody',
  templateUrl: './resumebody.component.html',
  styleUrls: ['./resumebody.component.scss']
})
export class ResumebodyComponent {
  @Input('resume') resume: Resume;

}
