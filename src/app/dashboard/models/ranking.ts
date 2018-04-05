import { PlaytimeModel } from '@dashboard/models/playtime';

export interface RankingModel {
  player_medals_total: number;
  player_medals_gold: number;
  player_medals_silver: number;
  player_medals_bronze: number;
  player_games_total: number;
  player_games_won: number;
  player_games_lose: number;
  player_games_draw: number;
  playtime: PlaytimeModel[];
}
