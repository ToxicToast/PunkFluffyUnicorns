export const fetchDashboard = `query fetchDashboard {
  rankingQuery {
    player_id
    player_ranking
    player_games_won
    player_games_draw
    player_games_lose
    player_games_total
    player_medals_total
    player_medals_gold
    player_medals_silver
    player_medals_bronze
    player_kills
    player_deaths,
    player_healing_done,
    player_damage_done,
    private,
		trends {
      player_id
    	player_ranking
      player_games_total
      player_games_won
      player_games_draw
      player_games_lose
    }
    player {
      id
      name
    }
  }
  playtimeQuery {
  	player_id
    character_name
    character_time
    character_role
    player {
      id
      name
    }
  }
}`;
