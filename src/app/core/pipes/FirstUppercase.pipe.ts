import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'firstuppercase'
})
export class FirstUppercase implements PipeTransform {

  transform(champion: string): string {
    return `${champion.charAt(0).toUpperCase() + champion.slice(1)}`;
  }
}
