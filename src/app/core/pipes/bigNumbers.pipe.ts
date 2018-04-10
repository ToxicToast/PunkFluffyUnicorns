import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bignumbers'
})
export class BigNumbers implements PipeTransform {

  transform(number: number): string {
    const newNumber = number / 1000;
    return Number(newNumber).toFixed(0) + 'k';
  }
}
