import { Injectable } from '@angular/core';

@Injectable()
export class OverwatchService {

  constructor() { }

  getPoints(points: number): number {
    const calculation = this.getCalculation(points);
    return calculation.needed;
  }

  getNextLeague(points: number): string {
    const calculation = this.getCalculation(points);
    return calculation.league;
  }

  private getCalculation(points: number) {
    if (points < 1500 && points >= 1) {
      return {
        league: 'silver',
        needed: 1500 - points
      };
    } else if (points < 2000 && points >= 1500) {
      return {
        league: 'gold',
        needed: 2000 - points
      };
    } else if (points < 2500 && points >= 2000) {
      return {
        league: 'platinum',
        needed: 2500 - points
      };
    } else if (points < 3000 && points >= 2500) {
      return {
        league: 'diamond',
        needed: 3000 - points
      };
    } else if (points < 3500 && points >= 3000) {
      return {
        league: 'master',
        needed: 3500 - points
      };
    } else if (points < 4000 && points >= 3500) {
      return {
        league: 'grandmaster',
        needed: 4000 - points
      };
    }
  }
}
