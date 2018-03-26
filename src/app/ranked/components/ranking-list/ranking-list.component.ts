import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ranking-list',
  templateUrl: './ranking-list.component.html',
  styleUrls: ['./ranking-list.component.scss']
})
export class RankingListComponent implements OnInit {

  @Input() state: any;
  @Output() switchPlayer = new EventEmitter<number>();

  constructor( ) { }

  ngOnInit() {
  }

  getPlayerTier(tier: string): string {
    return `/assets/ranks/${tier}.png`;
  }

  getRankingWithDiff(ranking: number, trends: any[]): string {
    let returnString = '';
    //
    if (trends.length > 0) {
      const lastRank = trends[0];
      const { player_rank } = lastRank;
      const difference = ranking - player_rank;
      const icon = this.getDiffIcon(difference);
      const symbol = this.getDiffSymbol(difference);
      if (difference !== 0) {
        returnString += ` ( ${symbol} ${difference} ${icon} )`;
      }
    }
    //
    return returnString;
  }

  getCharacterAvatar(character: string): string {
    return `/assets/characters/${character}.png`;
  }

  getCharacterTooltip(character: string, role: string): string {
     return `${character.charAt(0).toUpperCase() + character.slice(1)} - ${role}`;
  }

  getRankedTooltip(tier: string): string {
    if (tier) {
      return tier.charAt(0).toUpperCase() + tier.slice(1);
    }
    return tier;
  }

  getNextLeagueIcon(league: string): string {
    return `/assets/ranks/${league}.png`;
  }

  getNextLeagueTooltip(nexttier): string {
    const points = nexttier.needed;
    const league = nexttier.league;
    const upperLeague = league.charAt(0).toUpperCase() + league.slice(1);
    return `${upperLeague} in ${points} Points`;
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
