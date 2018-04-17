import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-auth-container',
  templateUrl: './auth-container.component.html',
  styleUrls: ['./auth-container.component.scss']
})
export class AuthContainerComponent implements OnInit {

  isRegister = false;
  isLogin = false;
  isLostPassword = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.getRouteData();
  }

  goToRegister() {
    const url = '/auth/register';
    this.router.navigate([url]);
  }

  private getRouteData() {
    this.route.params.subscribe(data => {
      this.isRegister = this.route.snapshot.data['isRegister'] ? true : false;
      this.isLogin = this.route.snapshot.data['isLogin'] ? true : false;
      this.isLostPassword = this.route.snapshot.data['isLostPassword'] ? true : false;
    });
  }

}
