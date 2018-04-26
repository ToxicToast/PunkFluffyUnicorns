import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss']
})
export class NewsListComponent implements OnInit {

  @Input() state: any;

  constructor() { }

  ngOnInit() {
  }

  trackByTitle(index: number, news: any) {
    return news.title;
  }

}
