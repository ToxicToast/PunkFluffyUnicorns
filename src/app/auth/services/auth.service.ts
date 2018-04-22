import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@env/environment';

import gql from 'graphql-tag';
import { Apollo } from 'apollo-angular';
import { registerUser } from '@auth/graphql/query';

@Injectable()
export class AuthService {

  private baseUrl: string;
  constructor(
    private http: HttpClient,
    private apollo: Apollo
  ) {
    this.baseUrl = environment.baseUrl;
  }

  userRegister(data) {
    const { payload } = data;
    const query = registerUser;
    const replaced = query
      .replace('%USERNAME%', payload.username)
      .replace('%EMAIL%', payload.email)
      .replace('%PASSWORD%', payload.password)
      .replace('%PLAYERROLE%', payload.player_roles);
      return this.apollo.mutate({
        mutation: gql`${replaced}`,
      });
  }
}
