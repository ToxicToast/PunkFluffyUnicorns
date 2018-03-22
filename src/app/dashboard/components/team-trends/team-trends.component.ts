import { Component, OnInit } from '@angular/core';

import { Chart, ChartSeries } from '@dashboard/models/chart';

@Component({
  selector: 'app-team-trends',
  templateUrl: './team-trends.component.html',
  styleUrls: ['./team-trends.component.scss']
})
export class TeamTrendsComponent implements OnInit {

  stats = [];

  constructor() {

  }

  ngOnInit() {
    const beloor = [
      { value: 0, name: 'Session Start' },
      { value: 2382, name: 'After Placements' }
    ];
    //
    const dragon = [
      { value: 0, name: 'Session Start' },
      { value: 2061, name: 'After Placements' }
    ];
    //
    const hanter = [
      { value: 0, name: 'Session Start' },
      { value: 2222, name: 'After Placements' }
    ];
    //
    const noobster = [
      { value: 0, name: 'Session Start' },
      { value: 2078, name: 'After Placements' },
      { value: 2101, name: 'Game #1' },
      { value: 2128, name: 'Game #2' },
      { value: 2057, name: 'Game #3' },
      { value: 2062, name: 'Game #4' },
      { value: 2081, name: 'Game #5' },
      { value: 2099, name: 'Game #6' }
    ];
    //
    const sensimillia = [
      { value: 0, name: 'Session Start' },
      { value: 2273, name: 'After Placements' },
      { value: 2212, name: 'Game #1' },
      { value: 2152, name: 'Game #2' },
      { value: 2200, name: 'Game #3' },
      { value: 2246, name: 'Game #4' },
      { value: 2292, name: 'Game #5' },
      { value: 2317, name: 'Game #6' }
    ];
    //
    const toxictoast = [
      { value: 0, name: 'Session Start' },
      { value: 2264, name: 'After Placements' },
      { value: 2262, name: 'Game #1' },
      { value: 2292, name: 'Game #2' },
      { value: 2224, name: 'Game #3' },
      { value: 2221, name: 'Game #4' },
      { value: 2244, name: 'Game #5' },
      { value: 2269, name: 'Game #6' }
    ];
    //
    this.getData('BeLoor', beloor);
    this.getData('DragonMG', dragon);
    this.getData('HanterGER', hanter);
    this.getData('Noobster', noobster);
    this.getData('Sensimillia', sensimillia);
    this.getData('ToxicToast', toxictoast);
  }

  private getData(name: string, series?: ChartSeries[]): void {
    const stats = {
      name,
      series
    };
    this.stats.push(stats);
  }

}
