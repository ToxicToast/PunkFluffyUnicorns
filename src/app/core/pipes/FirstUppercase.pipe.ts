import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'firstuppercase'
})
export class FirstUppercase implements PipeTransform {

  transform(value: any, args?: any): any {
    return `${value.charAt(0).toUpperCase() + value.slice(1)}`;
  }
}
