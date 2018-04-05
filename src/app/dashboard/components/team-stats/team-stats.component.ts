import { Component, OnInit, Input } from '@angular/core';

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

}
