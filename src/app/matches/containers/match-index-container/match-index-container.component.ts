import { Component, OnInit } from '@angular/core';

import { fadeAnimation } from '@core/helpers/Animation';

@Component({
  selector: 'app-match-index-container',
  templateUrl: './match-index-container.component.html',
  styleUrls: ['./match-index-container.component.scss'],
  animations: [fadeAnimation]
})
export class MatchIndexContainerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
