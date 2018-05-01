import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@env/environment';

import gql from 'graphql-tag';
import { Apollo } from 'apollo-angular';
import { createVisitor } from '@core/graphql/query';

@Injectable()
export class CounterService {

  private baseUrl: string;

  constructor(
    private http: HttpClient,
    private apollo: Apollo
  ) {
    this.baseUrl = environment.baseUrl;
  }

  getData() {
    const url = 'https://ipapi.co/json/';
    return this.http.get(url);
  }

  setVisitor(payload) {
    const { ip, country, city } = payload;
    const { userAgent, platform } = navigator;
    //
    const query = createVisitor;
    const replaced = query
      .replace('%VISITORIP%', ip)
      .replace('%VISITORCOUNTRY%', country)
      .replace('%VISITORCITY%', city)
      .replace('%VISITORAGENT%', userAgent)
      .replace('%VISITORPLATFORM%', platform);
    return this.apollo.mutate({
      mutation: gql`${replaced}`,
    });
  }

  redirectSpammers(ip) {
    /*if (ip === '85.182.76.59') {
      window.location.href = 'https://rickrolled.fr/';
    }*/
    return false;
  }

}
