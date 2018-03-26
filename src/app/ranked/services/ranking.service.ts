import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '@env/environment';

@Injectable()
export class RankingService {

  private baseUrl: string;

  constructor(
    private http: HttpClient
  ) {
    this.baseUrl = environment.baseUrl;
  }

  getRankings() {
    const endpoint = '/overwatch/tracker/ranked';
    const url = `${this.baseUrl}${endpoint}`;
    return this.http.get(url);
  }

  getRanking(data) {
    const { payload } = data;
    const id = payload;
    const endpoint = `/overwatch/tracker/ranked/${id}`;
    const url = `${this.baseUrl}${endpoint}`;
    return this.http.get(url);
  }

}
