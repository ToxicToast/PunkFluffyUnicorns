import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '@env/environment';

@Injectable()
export class DashboardService {

  private baseUrl: string;

  constructor(
    private http: HttpClient
  ) {
    this.baseUrl = environment.baseUrl;
  }

  getMedals() {
    const endpoint = '/overwatch/tracker/medals';
    const url = `${this.baseUrl}${endpoint}`;
    return this.http.get(url);
  }

  getTrends() {
    const endpoint = '/overwatch/tracker/trends';
    const url = `${this.baseUrl}${endpoint}`;
    return this.http.get(url);
  }

  getStatistics() {
    const endpoint = '/overwatch/tracker/statistics';
    const url = `${this.baseUrl}${endpoint}`;
    return this.http.get(url);
  }

  getStreamers() {
    const endpoint = '/overwatch/tracker/streamers';
    const url = `${this.baseUrl}${endpoint}`;
    return this.http.get(url);
  }

}
