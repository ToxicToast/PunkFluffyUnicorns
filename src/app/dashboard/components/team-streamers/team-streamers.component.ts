import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-team-streamers',
  templateUrl: './team-streamers.component.html',
  styleUrls: ['./team-streamers.component.scss']
})
export class TeamStreamersComponent implements OnInit {

  @Input() state: any;

  constructor() { }

  ngOnInit() {
    console.error(this.state);
  }

  streamClass(isOnline: boolean): string {
    if (isOnline) {
      return 'cat__core__step cat__core__step--success mb-4';
    } else {
      return 'cat__core__step cat__core__step--danger mb-4';
    }
  }

  streamIcon(isOnline: boolean): string {
    if (isOnline) {
      return 'fa fa-check';
    } else {
      return 'fa fa-close';
    }
  }

  getStatusGameText(isOnline: boolean, viewer: number, gameText: string): string {
    if (isOnline) {
      return `Online (${viewer}) - ${gameText}`;
    } else {
      return 'Offline';
    }
  }

}
