import { Component, Input } from '@angular/core';
import { Experience } from 'src/models/resume';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent {
  @Input('work') work: Experience[];

}
