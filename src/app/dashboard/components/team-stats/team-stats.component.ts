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
    let returnValue = null;
    const payload = { total: 0, won: 0, lost: 0, draw: 0 };
    this.state.overwatchRanking.forEach(data => {
      payload.total += data.player_games_total;
      payload.won += data.player_games_won;
      payload.lost += data.player_games_lose;
      payload.draw += data.player_games_draw;
    });
    if (value === 'total') {
      returnValue = payload.total;
    } else if (value === 'won') {
      returnValue = payload.won;
    } else if (value === 'lost') {
      returnValue = payload.lost;
    } else if (value === 'draw') {
      returnValue = payload.draw;
    } else {
      returnValue = 0;
    }
    return returnValue;
  }

  getAverageRanking(): string {
    const { overwatchRanking } = this.state;
    const payload = {
      players: 0,
      total: 0,
    };
    overwatchRanking.forEach(ranking => {
      payload.players++;
      payload.total += ranking.player_ranking;
    });
    return Number(payload.total / payload.players).toFixed(0);
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

  getMostDamage() {
    const damageArray = [];
    const { overwatchRanking } = this.state;
    overwatchRanking.forEach(ranking => {
      damageArray.push({
        player_id: ranking.player_id,
        player_name: ranking.player.name,
        value: ranking.player_damage_done
      });
    });
    const sorted = damageArray.sort(this.sortByValue);
    const most = sorted[0];
    return `${most.player_name} - ${this.formatBigNumbers(most.value)} Damage`;
  }

  getMostHealing() {
    const healingArray = [];
    const { overwatchRanking } = this.state;
    overwatchRanking.forEach(ranking => {
      healingArray.push({
        player_id: ranking.player_id,
        player_name: ranking.player.name,
        value: ranking.player_healing_done
      });
    });
    const sorted = healingArray.sort(this.sortByValue);
    const most = sorted[0];
    return `${most.player_name} - ${this.formatBigNumbers(most.value)} Healing`;
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

  private formatBigNumbers(value: number) {
    const newNumber = value / 1000;
    return Number(newNumber).toFixed(0) + 'k';
  }

}
