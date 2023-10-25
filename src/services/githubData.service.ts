import { Injectable, SecurityContext } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { FetchHelper } from 'src/helpers/fetch.helper';
import { Resume } from 'src/models/resume';

@Injectable({
  providedIn: 'root'
})
export class GithubDataService {

  constructor(private sanitizer: DomSanitizer) { }

  private static readonly githubRoot = "https://raw.githubusercontent.com/";
  private static readonly repositoryReference = "MrRandol/resume";
  private readonly defaultPosition = 'po';

  getResumeJson(position: string): Observable<Resume> {
    var positionSuffix = '';
    var p = position ? this.sanitizer.sanitize(SecurityContext.URL, position.toLowerCase()) : '';
    if (p !== '' && p != this.defaultPosition)
      positionSuffix = "-" + position;

    return FetchHelper.getObservableFromFetch<Resume>(GithubDataService.githubRoot + "/" + GithubDataService.repositoryReference + "/data/" + "resume" + positionSuffix + ".json");
  }

  getImagePath(fileName: string) {
    return GithubDataService.githubRoot + "/" + GithubDataService.repositoryReference + "/data/images/" + fileName;
  }

  static getTranslationFile(lang: string): Observable<any> {
    return FetchHelper.getObservableFromFetch<any>(GithubDataService.githubRoot + "/" + GithubDataService.repositoryReference + "/data/translation/" + lang + ".json")
  }

  getTranslationFlagLink(lang: string): string {
    return GithubDataService.githubRoot + "/" + GithubDataService.repositoryReference + "/data/translation/" + lang + ".svg"
  }

}
