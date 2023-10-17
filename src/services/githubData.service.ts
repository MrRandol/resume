import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FetchHelper } from 'src/helpers/fetch.helper';
import { Resume } from 'src/models/resume';

@Injectable({
  providedIn: 'root'
})
export class GithubDataService {
  
  constructor() { }

  private static readonly githubRoot = "https://raw.githubusercontent.com/";
  private static readonly repositoryReference = "MrRandol/resume";
  private static readonly jsonDataUrl = "https://raw.githubusercontent.com/MrRandol/resume/data/resume.json";

  getResumeJson(): Observable<Resume> {
    return FetchHelper.getObservableFromFetch<Resume>(GithubDataService.jsonDataUrl);
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
