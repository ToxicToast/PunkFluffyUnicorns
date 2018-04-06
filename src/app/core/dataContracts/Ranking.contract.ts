export interface Ranking {
  player_id: number;
  player_avatar?: string;
  player_level?: number;
  player_prestige?: number;
  player_ranking?: number;
  player_current_tier?: string;
  player_should_tier?: string;
  player_games_won?: number;
  player_games_draw?: number;
  player_games_lose?: number;
  player_games_total?: number;
  player_medals_total?: number;
  player_medals_gold?: number;
  player_medals_silver?: number;
  player_medals_bronze?: number;
  player_kills?: number;
  player_deaths?: number;
}
