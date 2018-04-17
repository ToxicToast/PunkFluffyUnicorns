import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'overwatchHero'
})
export class OverwatchHeroPipe implements PipeTransform {

  transform(champion: string): string {
    return this.transformName(champion);
  }

  private transformName(name: string): string {
    let newName = '';
    if (name === 'soldier76') {
      newName = 'Soldier:76';
    } else if (name === 'junkrat') {
      newName = 'Junkrat';
    } else if (name === 'mercy') {
      newName = 'Mercy';
    } else if (name === 'pharah') {
      newName = 'Pharah';
    } else if (name === 'reaper') {
      newName = 'Reaper';
    } else if (name === 'genji') {
      newName = 'Genji';
    } else if (name === 'hanzo') {
      newName = 'Hanzo';
    } else {
      newName = this.rewriteTanks(name);
    }
    return newName;
  }

  private rewriteTanks(name: string): string {
    let newName = '';
    if (name === 'reinhardt') {
      newName = 'Reinhardt';
    } else if (name === 'dva') {
      newName = 'D.Va';
    } else {
      newName = name;
    }
    return newName;
  }

}
