import { Component } from '@angular/core';
import { Sidebar } from '../sidebar/sidebar';
import { Gamesection } from '../gamesection/gamesection';
import { games } from '../../utils/games';
import { GameModel } from '../../models/gameModel';
import { Game } from '../game/game';

@Component({
  selector: 'app-content',
  imports: [Sidebar, Gamesection],
  templateUrl: './content.html',
  styleUrl: './content.css',
})
export class Content {
  gameList: GameModel[] = games;
  filter: string = "none";

  filterByPlatform(platform: string) {
    const newGames = [...games]
      .filter(game => game.platforms.split(',').includes(platform));

    this.filter = platform;
    this.gameList = newGames;
  }

  clearFilter() {
    this.filter = "none";
    this.gameList = [...games];
  }

  orderBy({ criteria, criteriaName }:{ criteria: string, criteriaName: string }) {
    const newgames = [...games].sort((a, b) => a[criteria as keyof GameModel] < b[criteria as keyof GameModel] ? 1 : -1);
    this.filter = criteriaName;
    this.gameList = newgames;
    if (criteria === 'price') this.gameList = newgames.reverse();
  }
}
