import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable, map, switchMap } from 'rxjs';
import { Resume } from 'src/models/resume';
import { GithubDataService } from 'src/services/githubData.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  resume$: Observable<Resume>;

  constructor(
    private service: GithubDataService,
    private route: ActivatedRoute) { }

  ngOnInit() {

    this.resume$ = this.route.queryParamMap.pipe(
      map((params: ParamMap) => params.get('position')),
      map(p => this.service.getResumeJson(p)),
      switchMap(r => r.pipe(r => r))
    )

  }
}
