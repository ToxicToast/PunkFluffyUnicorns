import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-team-heroes',
  templateUrl: './team-heroes.component.html',
  styleUrls: ['./team-heroes.component.scss']
})
export class TeamHeroesComponent implements OnInit {

  @Input() state: any;

  constructor() { }

  ngOnInit() { }

  getHeroes(value: string): string[] {
    const offense = [];
    const defense = [];
    const support = [];
    const tank = [];
    //
    this.state.overwatchPlaytime.forEach(data => {
      if (data.character_role === 'Offense') {
        offense.push(data);
      } else if (data.character_role === 'Defense') {
        defense.push(data);
      } else if (data.character_role === 'Support') {
        support.push(data);
      } else if (data.character_role === 'Tank') {
        tank.push(data);
      }
    });
    //
    const sortOffense = this.sortArrayByTime(offense);
    const sortDefense = this.sortArrayByTime(defense);
    const sortSupport = this.sortArrayByTime(support);
    const sortTank = this.sortArrayByTime(tank);
    //
    if (value === 'offense') {
      return sortOffense;
    } else if (value === 'defense') {
      return sortDefense;
    } else if (value === 'support') {
      return sortSupport;
    } else if (value === 'tank') {
      return sortTank;
    } else {
      return [];
    }
  }

  getHeroRow(hero: string, index: number): string {
    if (index === 0) {
      return hero;
    }
  }

  getHeroImage(hero: string): string {
    return `/assets/characters/${hero}.png`;
  }

  getHeroTooltip(hero: string): string {
    return ``;
  }

  trackByCharacterName(index: number, hero: any) {
    return hero.character_name;
    // return index;
  }

  private sortArrayByTime(array) {
    const sorted = array.sort((n1, n2) => {
      if (n1.character_time < n2.character_time) {
        return 1;
      }
      if (n1.character_time > n2.character_time) {
        return -1;
      }
      return 0;
    });
    return sorted;
  }

}
