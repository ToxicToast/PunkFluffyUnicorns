import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ranking-list',
  templateUrl: './ranking-list.component.html',
  styleUrls: ['./ranking-list.component.scss']
})
export class RankingListComponent implements OnInit {

  @Input() state: any;

  constructor() { }

  ngOnInit() {
  }

  getPlayerTier(tier: string) {
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

  getCharacterTooltip(character: string): string {
    if (character) {
      return character.charAt(0).toUpperCase() + character.slice(1);
    }
    return character;
  }

  getRankedTooltip(tier: string): string {
    if (tier) {
      return tier.charAt(0).toUpperCase() + tier.slice(1);
    }
    return tier;
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
