import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  sidebarVisible: boolean = false;

  constructor(
    private router: Router
  ) { }

  ngOnInit() { }

  routeToLink(route: string): void {
    this.router.navigate([route]);
  }

  changeSidebarStatus(status: boolean) {
    this.sidebarVisible = status;
  }

  getSidebarVisibility(): string {
    if (this.sidebarVisible) {
      return 'showSidebar';
    } else {
      return 'hideSidebar';
    }
  }

}
