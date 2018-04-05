import { Component, OnInit, Input } from '@angular/core';
import { DashboardModel } from '@dashboard/models/dashboard';

@Component({
  selector: 'app-team-medals',
  templateUrl: './team-medals.component.html',
  styleUrls: ['./team-medals.component.scss']
})
export class TeamMedalsComponent implements OnInit {

  @Input() state: any;

  constructor() { }

  ngOnInit() {
    // console.error(this.state);
  }

  getMedals(value: string): number {
    let total = 0;
    let gold = 0;
    let silver = 0;
    let bronze = 0;
    this.state.overwatchRanking.forEach(data => {
      total += data.player_medals_total;
      gold += data.player_medals_gold;
      silver += data.player_medals_silver;
      bronze += data.player_medals_bronze;
    });
    if (value === 'total') {
      return total;
    } else if (value === 'gold') {
      return gold;
    } else if (value === 'silver') {
      return silver;
    } else if (value === 'bronze') {
      return bronze;
    } else {
      return 0;
    }
  }

}
