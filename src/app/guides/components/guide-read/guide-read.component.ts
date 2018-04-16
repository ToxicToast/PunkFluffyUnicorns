import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-guide-read',
  templateUrl: './guide-read.component.html',
  styleUrls: ['./guide-read.component.scss']
})
export class GuideReadComponent implements OnInit {

  @Input() state: any;

  constructor() { }

  ngOnInit() {
  }

  getTitle(): string {
    return this.state.guide.title;
  }

  getText(): string {
    return this.state.guide.text;
  }

}
