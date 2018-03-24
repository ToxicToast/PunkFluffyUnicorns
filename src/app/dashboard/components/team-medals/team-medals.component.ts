import { Component, OnInit, Input } from '@angular/core';
import { Statistics } from '@dashboard/models/statistics';

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

}
