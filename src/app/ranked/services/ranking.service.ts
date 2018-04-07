import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@env/environment';

import gql from 'graphql-tag';
import { Apollo } from 'apollo-angular';
import { fetchPlayers, fetchPlayerProfile } from '@ranked/graphql/query';

import { Tiers } from '@core/helpers/Tiers';
import { Roles } from '@core/helpers/Roles';

@Injectable()
export class RankingService {

  private baseUrl: string;

  constructor(
    private http: HttpClient,
    private apollo: Apollo
  ) {
    this.baseUrl = environment.baseUrl;
  }

  getRanked() {
    return this.apollo.query({ query: gql`${fetchPlayers}` });
  }

  getProfile(id) {
    const query = fetchPlayerProfile;
    const replaced = query.replace('%ID%', id);
    return this.apollo.query({ query: gql`${replaced}` });
  }

  setRealTier(tier: string, shouldTier: string): string {
    const tiers = new Tiers();
    return tiers.compareTiers(tier, shouldTier);
  }

  setRealLevel(prestige: number, level: number): number {
    return (prestige * 100) + level;
  }

  setNextLeague(ranking: number) {
    const tiers = new Tiers();
    tiers.setRanking(ranking);
    return tiers.getTier();
  }

  setNextLeaguePointsNeeded(ranking: number) {
    const tiers = new Tiers();
    tiers.setRanking(ranking);
    return tiers.getNeeded();
  }

  getRole(name: string, champions: any): string {
    const roles = new Roles();
    return roles.setMainRole(name, champions);
  }


 /*
  updateRanking(data) {
    const { payload } = data;
    const id = payload;
    const endpoint = `/overwatch/tracker/ranked/update/${id}`;
    const url = `${this.baseUrl}${endpoint}`;
    return this.http.get(url);
  }*/

}
