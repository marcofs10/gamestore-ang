import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  imports: [],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar {
  @Output() filterByPlatform = new EventEmitter<string>();

  filterSelected(filter:string){
    this.filterByPlatform.emit(filter);
  }
}
