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
    } else if (name === 'junkrat') {
      return 'Junkrat';
    } else if (name === 'mercy') {
      return 'Mercy';
    } else if (name === 'pharah') {
      return 'Pharah';
    } else if (name === 'reaper') {
      return 'Reaper';
    } else if (name === 'genji') {
      return 'Genji';
    } else if (name === 'hanzo') {
      return 'Hanzo';
    } else {
      return this.rewriteTanks(name);
    }
  }

  private rewriteTanks(name: string): string {
    if (name === 'reinhardt') {
      return 'Reinhardt';
    } else if (name === 'dva') {
      return 'D.Va';
    } else {
      return name;
    }
  }

}
