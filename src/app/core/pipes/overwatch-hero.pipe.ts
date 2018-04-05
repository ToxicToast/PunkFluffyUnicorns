import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'overwatchHero'
})
export class OverwatchHeroPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return this.transformName(value);
  }

  private transformName(name: string): string {
    if (name === 'soldier76') {
      return 'Soldier:76';
    }
    if (name === 'junkrat') {
      return 'Junkrat';
    }
    if (name === 'mercy') {
      return 'Mercy';
    }
    if (name === 'dva') {
      return 'D.Va';
    }
    if (name === 'pharah') {
      return 'Pharah';
    }
    if (name === 'reinhardt') {
      return 'Reinhardt';
    }
    if (name === 'reaper') {
      return 'Reaper';
    }
    return name;
  }

}
