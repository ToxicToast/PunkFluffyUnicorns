import { Component, OnInit, Input } from '@angular/core';

import { Chart, ChartSeries } from '@dashboard/models/chart';

@Component({
  selector: 'app-team-trends',
  templateUrl: './team-trends.component.html',
  styleUrls: ['./team-trends.component.scss']
})
export class TeamTrendsComponent implements OnInit {

  roundDomains = true;
  showYAxisLabel = true;
  yAxis = true;
  yAxisLabel = 'Skill Rating';

  @Input() state: any;

  constructor() { }

  ngOnInit() {
    // console.error(this.state);
  }

}
