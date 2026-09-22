import { Component, EventEmitter, Input, Output } from '@angular/core';
import { GameModel } from '../../models/gameModel';
import { Game } from '../game/game';

@Component({
  selector: 'app-gamesection',
  imports: [Game],
  templateUrl: './gamesection.html',
  styleUrl: './gamesection.css',
})
export class Gamesection {
  @Input() gameList: GameModel[] = [];
  @Input() filter:string = ""
  @Output() clearFilter = new EventEmitter<void>()

  handleClear(){
    this.clearFilter.emit()
  }
}
