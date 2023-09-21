import { Component, Input } from '@angular/core';
import { Skill } from 'src/models/resume';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  @Input('skills') skills: Skill[];
}
