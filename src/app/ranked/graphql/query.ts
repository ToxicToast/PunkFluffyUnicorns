export const fetchPlayers = `query fetchRanking {
  rankingQuery {
    player_id
    player_avatar
    player_level
    player_prestige
    player_ranking
    player_current_tier
    player_should_tier
    player_games_total
    player_games_won
    player_games_lose
    player_games_draw
    playtime {
      player_id
      character_name
      character_role
      character_time
    }
    player {
      id
      name
    }
  }
}`;

export const fetchPlayerProfile = `query fetchRanking {
  rankingQuery(player_id:%ID%) {
    player_id
    player_avatar
    player_level
    player_prestige
    player_ranking
    player_current_tier
    player_should_tier
    player_games_total
    player_games_won
    player_games_lose
    player_games_draw
    playtime {
      player_id
      character_name
      character_role
      character_time
      character_kills
      character_deaths
      character_winrate
      character_games_played
      character_games_won
      character_games_draw
      character_games_lost
      character_healing_done
      character_damage_done
    }
    player {
      id
      name
    }
  }
}`;
