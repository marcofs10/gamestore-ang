import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon-platform',
  imports: [],
  templateUrl: './icon-platform.html',
  styleUrl: './icon-platform.css',
})
export class IconPlatform {
  @Input() icon:string = "";
}
