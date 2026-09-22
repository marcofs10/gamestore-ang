import { Component } from '@angular/core';
import { Sidebar } from '../sidebar/sidebar';
import { Gamesection } from '../gamesection/gamesection';
import { games } from '../../utils/games';
import { GameModel } from '../../models/gameModel';

@Component({
  selector: 'app-content',
  imports: [Sidebar, Gamesection],
  templateUrl: './content.html',
  styleUrl: './content.css',
})
export class Content {
  gameList:GameModel[] = games;
  filter: string = "none";

  filterByPlatform(platform: string) {
    const newGames = [...games]
      .filter(game => game.platforms.split(',').includes(platform));

    this.filter = platform;
    this.gameList = newGames;
  }

  clearFilter(){
    this.filter = "none";
    this.gameList = [...games];
  }
}
