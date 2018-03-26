import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  sidebarVisible: boolean;

  constructor(
    private router: Router
  ) {
    this.sidebarVisible = false;
  }

  ngOnInit() { }

  routeToLink(route: string): void {
    this.router.navigate([
      route
    ]);
  }

}
