import { Component, OnInit } from '@angular/core';
import { VERSION } from 'environments/version';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  version = VERSION;

  constructor() { }

  ngOnInit() {
  }

}
