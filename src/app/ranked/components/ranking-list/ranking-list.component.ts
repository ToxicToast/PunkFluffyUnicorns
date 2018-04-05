import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { RankingService } from '@ranked/services/ranking.service';

@Component({
  selector: 'app-ranking-list',
  templateUrl: './ranking-list.component.html',
  styleUrls: ['./ranking-list.component.scss']
})
export class RankingListComponent implements OnInit {

  @Input() state: any;
  @Output() switchPlayer = new EventEmitter<number>();

  constructor(
    private service: RankingService
  ) { }

  ngOnInit() { }

  getPlayerTier(tier: string, shouldTier: string): string {
    const tierState = this.service.setRealTier(tier, shouldTier);
    return `/assets/ranks/${tierState}.png`;
  }

  getRankingWithDiff(ranking: number, trends: any[]): string {
    let returnString = '';
    //
    /*if (trends.length > 0) {
      const lastRank = trends[0];
      const { player_rank } = lastRank;
      const difference = ranking - player_rank;
      const icon = this.getDiffIcon(difference);
      const symbol = this.getDiffSymbol(difference);
      if (difference !== 0) {
        // returnString += `${symbol} ${difference} ${icon}`;
        returnString += `${symbol} ${difference}`;
      }
    }*/
    //
    return returnString;
  }

  getRankingWithDiffClass(ranking: number, trends: any[]): string {
    let returnString = 'always-hide';
    /*if (trends.length > 0) {
      const lastRank = trends[0];
      const { player_rank } = lastRank;
      const difference = ranking - player_rank;
      if (difference > 0) {
        returnString = 'btn btn-sm btn-success';
      } else if (difference < 0) {
        returnString = 'btn btn-sm btn-danger';
      } else {
        returnString = 'always-hide';
      }
    }*/
    return returnString;
  }

  getCharacterAvatar(character: string): string {
    return `/assets/characters/${character}.png`;
  }

  getCharacterTooltip(character: string, role: string): string {
    return `${character.charAt(0).toUpperCase() + character.slice(1)} - ${role}`;
  }

  getRankedTooltip(tier: string, shouldTier: string): string {
    if (tier) {
      const tierState = this.service.setRealTier(tier, shouldTier);
      return tierState.charAt(0).toUpperCase() + tierState.slice(1);
    }
    return tier;
  }

  getNextLeagueIcon(ranking: number): string {
    const league = this.service.setNextLeague(ranking);
    return `/assets/ranks/${league}.png`;
  }

  getNextLeagueTooltip(ranking: number): string {
    const league = this.service.setNextLeague(ranking);
    const points = this.service.setNextLeaguePointsNeeded(ranking);
    const upperLeague = league.charAt(0).toUpperCase() + league.slice(1);
    return `${upperLeague} in ${points} Points`;
  }

  getWinrate(total: number, wins: number): string {
    const winrate = (wins / total) * 100;
    const rounded = Math.round(winrate);
    return `${rounded} %`;
  }

  getWinrateButtonColor(total: number, wins: number): string {
    const winrate = (wins / total) * 100;
    if (winrate > 50) {
      return 'btn btn-sm btn-success';
    } else if (winrate < 50) {
      return 'btn btn-sm btn-danger';
    } else {
      return 'btn btn-sm btn-warning';
    }
  }

  trackByName(index, player) {
    return player.player_id;
  }

  calculateAverage(state: any, ranking: number|string): boolean {
    let players = 0;
    let allRanking = 0;
    let average = 0;
    state.forEach(player => {
      players += 1;
      allRanking += Number(player.player_ranking);
    });
    average = allRanking / players;
    if (average > ranking) {
      return true;
    } else {
      return false;
    }
  }

  averageToolTip(player: string, underperforming: boolean): string {
    if (underperforming) {
      return `${player} is underperforming!`;
    } else {
      return '';
    }
  }

  calculateLevel(prestige: number, level: number): number {
    return this.service.setRealLevel(prestige, level);
  }

  getRole(name: string, champions: any): string {
    return this.service.getRole(name, champions);
  }

  private getDiffIcon(difference: number): string {
    if (difference < 0) {
      return `<i class='fa fa-caret-down'></i>`;
    } else if (difference > 0) {
      return `<i class='fa fa-caret-up'></i>`;
    } else {
      return '';
    }
  }

  private getDiffSymbol(difference: number): string {
    if (difference > 0) {
      return `+`;
    } else {
      return '';
    }
  }

}
