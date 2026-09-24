import { Component, Input } from '@angular/core';
import { GameModel } from '../../models/gameModel';
import { IconPlatform } from '../icon-platform/icon-platform';

@Component({
  selector: 'app-game',
  imports: [IconPlatform],
  templateUrl: './game.html',
  styleUrl: './game.css',
})
export class Game {
  @Input() game!: GameModel;
  @Input() row: boolean = false
  hovered: boolean = false;
  thumbnailShown: number = 0

  handleMouseEnter() {
    console.log("aqui")
    this.hovered = true;
  }

  handleMouseLeave() {
    this.hovered = false;
    this.thumbnailShown = 0;
  }

  handleThumbnailShown2(e: MouseEvent) {
    if (this.hovered) {
      const target = e.target as HTMLElement;

      const coordRelativeX =
        e.clientX -
        target.offsetParent?.parentElement?.parentElement?.offsetLeft!;

      const division = target.clientWidth / 5;

      if (division > coordRelativeX) {
        this.thumbnailShown = 0;
      } else if (coordRelativeX < division * 2) {
        this.thumbnailShown = 1;
      } else if (coordRelativeX < division * 3) {
        this.thumbnailShown = 2;
      } else if (coordRelativeX < division * 4) {
        this.thumbnailShown = 3;
      } else {
        this.thumbnailShown = 4;
      }
    }
  }

  handleThumbnailShown(e: MouseEvent) {
    if (!this.hovered) return;

    const target = e.currentTarget as HTMLElement;
    const eventLimitRectangle = target.getBoundingClientRect();

    const relativeXPos = e.clientX - eventLimitRectangle.left;
    const division = eventLimitRectangle.width / 5;

    if (relativeXPos < division) {
      this.thumbnailShown = 0;
    } else if (relativeXPos < division * 2) {
      this.thumbnailShown = 1;
    } else if (relativeXPos < division * 3) {
      this.thumbnailShown = 2;
    } else if (relativeXPos < division * 4) {
      this.thumbnailShown = 3;
    } else {
      this.thumbnailShown = 4;
    }
  }
}
