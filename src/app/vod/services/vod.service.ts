import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@env/environment';

import gql from 'graphql-tag';
import { Apollo } from 'apollo-angular';
import { fetchVods, fetchSingle, createVod } from '@vod/graphql/query';


@Injectable()
export class VodService {

  private baseUrl: string;

  constructor(
    private http: HttpClient,
    private apollo: Apollo
  ) {
    this.baseUrl = environment.baseUrl;
  }

  getVideos() {
    return this.apollo.query({ query: gql`${fetchVods}` });
  }

  getSingle(data) {
    const { payload } = data;
    const query = fetchSingle;
    const replaced = query.replace('%ID%', payload);
    return this.apollo.query({ query: gql`${replaced}` });
  }

  addVideo(data) {
    const { payload } = data;
    return this.apollo.mutate({
      mutation: gql`${createVod}`,
      variables: {}
    });
  }

}
