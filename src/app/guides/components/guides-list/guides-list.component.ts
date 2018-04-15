import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-guides-list',
  templateUrl: './guides-list.component.html',
  styleUrls: ['./guides-list.component.scss']
})
export class GuidesListComponent implements OnInit {

  @Input() state: any;

  constructor() { }

  ngOnInit() {
  }

  trackByTitle(index: number, guide: any) {
    return guide.title;
  }

}
