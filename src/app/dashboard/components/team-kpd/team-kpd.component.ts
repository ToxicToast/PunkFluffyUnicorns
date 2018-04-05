import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-team-kpd',
  templateUrl: './team-kpd.component.html',
  styleUrls: ['./team-kpd.component.scss']
})
export class TeamKpdComponent implements OnInit {

  @Input() state: any;

  constructor() { }

  ngOnInit() {
  }

  getKPD(value: string): number|string {
    let kills = 0;
    let deaths = 0;
    let kpd = 0;
    //
    this.state.overwatchRanking.forEach(data => {
      kills += data.player_kills;
      deaths += data.player_deaths;
    });
    kpd = kills / deaths;
    //
    if (value === 'kills') {
      return kills;
    } else if (value === 'deaths') {
      return deaths;
    } else if (value === 'kpd') {
      return Number(kpd).toPrecision(3);
    } else {
      return 0;
    }
  }

}
