import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  imports: [],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar {
  @Output() filterByPlatform = new EventEmitter<string>();
  @Output() orderBy = new EventEmitter<{ criteria: string, criteriaName: string }>();

  filterSelected(filter: string) {
    this.filterByPlatform.emit(filter);
  }

  handleOrder(criteria:string,criteriaName:string) {
    this.orderBy.emit({ criteria, criteriaName })
  }
}
