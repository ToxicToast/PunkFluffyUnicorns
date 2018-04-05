import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '@env/environment';

import gql from 'graphql-tag';
import { Apollo } from 'apollo-angular';
import { fetchDashboard } from '@dashboard/graphql/query';

@Injectable()
export class DashboardService {

  private baseUrl: string;

  constructor(
    private http: HttpClient,
    private apollo: Apollo
  ) {
    this.baseUrl = environment.baseUrl;
  }

  getDashboard() {
    return this.apollo.query({ query: gql`${fetchDashboard}` });
  }
}
