import { Pipe, PipeTransform } from '@angular/core';
import { GithubDataService } from 'src/services/githubData.service';
/*
 * Raise the value exponentially
 * Takes an exponent argument that defaults to 1.
 * Usage:
 *   value | exponentialStrength:exponent
 * Example:
 *   {{ 2 | exponentialStrength:10 }}
 *   formats to: 1024
*/
@Pipe({name: 'joinStringArray'})
export class JoinStringArrayPipe implements PipeTransform {
  transform(value: string[] | string): string {
    if (Array.isArray(value)) {
      return value.join(" ");
    }
    return value;
  }
}
