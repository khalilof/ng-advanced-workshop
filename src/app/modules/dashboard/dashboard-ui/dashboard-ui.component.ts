import { Component, EventEmitter, HostBinding, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { ITable, TableStatus } from '../../../model/table.interface';

@Component({
  selector: 'app-dashboard-ui',
  templateUrl: './dashboard-ui.component.html',
  styleUrls: ['./dashboard-ui.component.scss']
})
export class DashboardUiComponent implements OnChanges {
  @Input() hasBackground: boolean = false;
  @Input() compactMode: boolean = false;
  @Input() tables: ITable[] | null = [];

  @Output() updateTable = new EventEmitter<ITable>();
  @Output() filterValueChange = new EventEmitter<string>();

  @HostBinding('style.background-image')
  backgroundImage = this.hasBackground ? 'url(https://512pixels.net/wp-content/uploads/2020/06/11-0-Color-Day-thumbnails.jpg)' : 'none';

  filterValue = '';

  TableStatus = TableStatus;

  constructor() {
  }

  applyFilter(filterValue: string): void {
    this.filterValue = filterValue;
    this.filterValueChange.emit(filterValue);
  }

  updateTableHandler($event: ITable) {
    this.updateTable.emit($event);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['hasBackground']) {
      this.backgroundImage = this.hasBackground ? 'url(https://512pixels.net/wp-content/uploads/2020/06/11-0-Color-Day-thumbnails.jpg)' : 'none';
    }
  }
}
