import { Observable } from 'rxjs';
import { TranslateLoader } from "@ngx-translate/core";
import { GithubDataService } from 'src/services/githubData.service';

export class ResumeTranslationLoader implements TranslateLoader {

  getTranslation(lang: string): Observable<any> {
    return GithubDataService.getTranslationFile(lang)
  }

}
