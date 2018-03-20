import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Store } from '@ngrx/store';

import { Profiles } from '@dashboard/models/profiles';

@Component({
  selector: 'app-ranking-index-container',
  templateUrl: './ranking-index-container.component.html',
  styleUrls: ['./ranking-index-container.component.scss']
})
export class RankingIndexContainerComponent implements OnInit {

  loading$: Observable<boolean>;
  loaded$: Observable<boolean>;
  error$: Observable<boolean>;
  errorMessage$: Observable<string>;
  profiles$: Observable<Profiles[]>;
  dummyData: Profiles[] = [];

  constructor() {
    this.loadProfiles();
    // this.dummyProfiles();
  }

  ngOnInit() { }

  loadProfiles() {
    console.error('load user profiles');
  }

  dummyProfiles() {
    console.error('add dummy data');
    const toxictoast: Profiles = {
      Id: 1,
      Username: 'ToxicToast',
      Hashtag: 1192,
      Avatar: '',
      Level: 102,
      Rating: 2244,
      Games: 49,
      Wins: 20,
      Loses: 25,
      Draws: 4
    };
    const beloor: Profiles = {
      Id: 2,
      Username: 'BeLoor',
      Hashtag: 2339,
      Avatar: '',
      Level: 254,
      Rating: 0,
      Games: 0,
      Wins: 0,
      Loses: 0,
      Draws: 0
    };
    const dragonmg: Profiles = {
      Id: 3,
      Username: 'DragonMG',
      Hashtag: 2607,
      Avatar: '',
      Level: 139,
      Rating: 0,
      Games: 0,
      Wins: 0,
      Loses: 0,
      Draws: 0
    };
    const hanterger: Profiles = {
      Id: 4,
      Username: 'HanterGER',
      Hashtag: 2134,
      Avatar: '',
      Level: 212,
      Rating: 0,
      Games: 0,
      Wins: 0,
      Loses: 0,
      Draws: 0
    };
    const noobster: Profiles = {
      Id: 5,
      Username: 'Noobster',
      Hashtag: 21680,
      Avatar: '',
      Level: 265,
      Rating: 2081,
      Games: 28,
      Wins: 17,
      Loses: 9,
      Draws: 2
    };
    const sensimillia: Profiles = {
      Id: 6,
      Username: 'Sensimillia',
      Hashtag: 21307,
      Avatar: '',
      Level: 674,
      Rating: 2200,
      Games: 48,
      Wins: 20,
      Loses: 24,
      Draws: 4
    };
    //
    this.dummyData.push(toxictoast);
    this.dummyData.push(beloor);
    this.dummyData.push(dragonmg);
    this.dummyData.push(hanterger);
    this.dummyData.push(noobster);
    this.dummyData.push(sensimillia);
  }

}
