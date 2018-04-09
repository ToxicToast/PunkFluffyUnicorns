import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'overwatchHero'
})
export class OverwatchHeroPipe implements PipeTransform {

  transform(champion: string): string {
    return this.transformName(champion);
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
    if (name === 'genji') {
      return 'Genji';
    }
    if (name === 'hanzo') {
      return 'Hanzo';
    }
    return name;
  }

}
