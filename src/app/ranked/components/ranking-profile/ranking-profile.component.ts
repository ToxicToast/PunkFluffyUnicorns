import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-ranking-profile',
  templateUrl: './ranking-profile.component.html',
  styleUrls: ['./ranking-profile.component.scss']
})
export class RankingProfileComponent implements OnInit {

  @Input() state: any;
  @Output() playerUpdate = new EventEmitter<any>();

  constructor() { }

  ngOnInit() { }

  getTierPicture(tier: string): string {
    return `/assets/ranks/${tier}.png`;
  }

  updatePlayer(id) {

  }


}
