import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute, Router } from '@angular/router';

import { Store } from '@ngrx/store';

import * as fromAuth from '@auth/reducers/auth.reducer';
import * as auth from '@auth/actions/auth.actions';

@Component({
  selector: 'app-auth-container',
  templateUrl: './auth-container.component.html',
  styleUrls: ['./auth-container.component.scss']
})
export class AuthContainerComponent implements OnInit {

  isRegister = false;
  isLogin = false;
  isLostPassword = false;

  register$: Observable<any>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private store: Store<fromAuth.State>
  ) {
    this.register$ = this.store.select(fromAuth.getRegisterState);
  }

  ngOnInit() {
    this.getRouteData();
  }

  goToRegister() {
    const url = '/auth/register';
    this.router.navigate([url]);
  }

  goToLogin() {
    const url = '/auth';
    this.router.navigate([url]);
  }

  registerUser(data) {
    this.store.dispatch(new auth.RegisterUser(data));
  }

  private getRouteData() {
    this.route.params.subscribe(data => {
      this.isRegister = this.route.snapshot.data['isRegister'] ? true : false;
      this.isLogin = this.route.snapshot.data['isLogin'] ? true : false;
      this.isLostPassword = this.route.snapshot.data['isLostPassword'] ? true : false;
    });
  }

}
