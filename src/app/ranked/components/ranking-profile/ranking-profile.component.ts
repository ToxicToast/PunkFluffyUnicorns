import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-ranking-profile',
  templateUrl: './ranking-profile.component.html',
  styleUrls: ['./ranking-profile.component.scss']
})
export class RankingProfileComponent implements OnInit {

  @Input() state: any;
  @Output() playerUpdate = new EventEmitter<number>();

  private buttonClicked = false;
  private buttonText = 'Update';

  constructor() { }

  ngOnInit() { }

  getTierPicture(tier: string): string {
    return `/assets/ranks/${tier}.png`;
  }

  updatePlayer(id) {
    this.buttonText = 'Updating';
    this.buttonClicked = true;
    this.playerUpdate.emit(id);
    setTimeout(() => {
      this.buttonText = 'Update';
      this.buttonClicked = false;
    }, 5000);
  }


}
