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
@Pipe({name: 'githubImage'})
export class GithubImagePipe implements PipeTransform {
  constructor(private githubDataService: GithubDataService) { }

  transform(value: string): string {
    return this.githubDataService.getImagePath(value)
  }
}
