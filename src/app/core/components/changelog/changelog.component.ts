import { Component, OnInit } from '@angular/core';
import { fadeAnimation } from '@core/helpers/Animation';

@Component({
  selector: 'app-changelog',
  templateUrl: './changelog.component.html',
  styleUrls: ['./changelog.component.scss'],
  animations: [fadeAnimation]
})
export class ChangelogComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
