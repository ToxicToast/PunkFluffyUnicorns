import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-responsive-navigation',
  templateUrl: './responsive-navigation.component.html',
  styleUrls: ['./responsive-navigation.component.scss']
})
export class ResponsiveNavigationComponent implements OnInit {

  @Input() sidebarVisible: boolean = false;
  @Output() openSidebarEvent = new EventEmitter<boolean|string>();

  constructor() { }

  ngOnInit() { }

  openSidebar() {
    if (this.sidebarVisible) {
      this.openSidebarEvent.emit(false);
    } else {
      this.openSidebarEvent.emit(true);
    }
  }

}
