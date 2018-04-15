import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '@env/environment';

import gql from 'graphql-tag';
import { Apollo } from 'apollo-angular';
import { fetchGuides } from '@guides/graphql/query';

@Injectable()
export class GuidesService {

  private baseUrl: string;

  constructor(
    private http: HttpClient,
    private apollo: Apollo
  ) {
    this.baseUrl = environment.baseUrl;
  }

  getGuides() {
    return this.apollo.query({ query: gql`${fetchGuides}` });
  }
}
