import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Observable, of, lastValueFrom, async } from 'rxjs';
import { FetchHelper } from 'src/helpers/fetch.helper';
import { Resume } from 'src/models/resume';

@Injectable({
  providedIn: 'root'
})
export class GithubDataService {

  constructor(private translate: TranslateService) { }

  static readonly JSON_DATA_DIR_URL: string = 'https://raw.githubusercontent.com/MrRandol/resume/data/resume.json';
  static readonly ERROR_MESSAGE: string = 'Something went wrong during static json data fetch: ';

  getResumeJson(): Observable<Resume> {
      const jsonDataUrl: string = `${GithubDataService.JSON_DATA_DIR_URL}`;
      return FetchHelper.getObservableFromFetch<Resume>(jsonDataUrl);
  }

  static getImagePath(fileName: string) {
    return "https://github.com/MrRandol/resume/blob/data/images/" + fileName + "?raw=true";
  }

  static getTranslationFile(lang: string): Observable<any> {
    return FetchHelper.getObservableFromFetch<any>("https://raw.githubusercontent.com/MrRandol/resume/data/translation/" + lang + ".json")
  }

}
