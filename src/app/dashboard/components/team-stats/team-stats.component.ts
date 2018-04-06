import { Component, OnInit, Input } from '@angular/core';

import { Tiers } from '@core/helpers/Tiers';

@Component({
  selector: 'app-team-stats',
  templateUrl: './team-stats.component.html',
  styleUrls: ['./team-stats.component.scss']
})
export class TeamStatsComponent implements OnInit {

  @Input() state: any;

  constructor() { }

  ngOnInit() {
    // console.error(this.state);
  }

  getWins(value: string): number {
    let total = 0;
    let won = 0;
    let lost = 0;
    let draw = 0;
    this.state.overwatchRanking.forEach(data => {
      total += data.player_games_total;
      won += data.player_games_won;
      lost += data.player_games_lose;
      draw += data.player_games_draw;
    });
    if (value === 'total') {
      return total;
    } else if (value === 'won') {
      return won;
    } else if (value === 'lost') {
      return lost;
    } else if (value === 'draw') {
      return draw;
    } else {
      return 0;
    }
  }

  getAverageRanking(): string {
    const { overwatchRanking } = this.state;
    let players = 0;
    let total = 0;
    //
    overwatchRanking.forEach(ranking => {
      players++;
      total += ranking.player_ranking;
    });
    const average = Number(total / players).toFixed(0);
    return average;
  }

  getAverageTier() {
    const average = this.getAverageRanking();
    const tiers = new Tiers();
    tiers.setRanking(Number(average));
    const currentTier = tiers.getCurrentTier();
    const formated = `${currentTier.charAt(0).toUpperCase() + currentTier.slice(1)}`;
    return formated;
  }

  getAverageTierImage(): string {
    const average = this.getAverageRanking();
    const tiers = new Tiers();
    tiers.setRanking(Number(average));
    return `/assets/ranks/${tiers.getCurrentTier()}.png`;
  }

  getMostKills(): string {
    const killArray = [];
    const { overwatchRanking } = this.state;
    overwatchRanking.forEach(ranking => {
      killArray.push({
        player_id: ranking.player_id,
        player_name: ranking.player.name,
        value: ranking.player_kills
      });
    });
    const sorted = killArray.sort(this.sortByValue);
    const most = sorted[0];
    return `${most.player_name} - ${most.value} Kills`;
  }

  getMostDeaths() {
    const deathArray = [];
    const { overwatchRanking } = this.state;
    overwatchRanking.forEach(ranking => {
      deathArray.push({
        player_id: ranking.player_id,
        player_name: ranking.player.name,
        value: ranking.player_deaths
      });
    });
    const sorted = deathArray.sort(this.sortByValue);
    const most = sorted[0];
    return `${most.player_name} - ${most.value} Deaths`;
  }

  private sortByValue(a, b) {
    if (a.value < b.value) {
      return 1;
    }
    if (a.value > b.value) {
      return -1;
    }
    return 0;
  }

}
