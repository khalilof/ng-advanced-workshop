import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges
} from '@angular/core';
import { ITable, TableStatus } from '../../../model/table.interface';
import { statusToDescriptionMap, statusToIconMap } from '../../../helper/status-icon-mapper';

@Component({
  selector: 'app-dashboard-item',
  templateUrl: './dashboard-item.component.html',
  styleUrls: ['./dashboard-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardItemComponent implements OnInit, OnChanges {
  @Input() table!: ITable;
  @Output() updateTable = new EventEmitter<ITable>();
  expanded = false;
  iconName = '';
  TableStatus = TableStatus;
  meals = '';
  tableStatusDescription = '';

  ngOnInit(): void {
    this.iconName = statusToIconMap.get(this.table.status) ?? '';
    this.tableStatusDescription = statusToDescriptionMap.get(this.table.status) ?? '';
  }

  ngOnChanges(changes: SimpleChanges) {

  }

  expand(): void {
    this.expanded = !this.expanded;
  }

  updateStatus(status: TableStatus) {
    if (this.meals.length > 0) {
      this.table.currentOrder = this.meals;
    }
    this.updateTable.emit({...this.table, status: status});
  }

  getSomeValue(): string {
    console.log('getSomeValue');
    return 'some text';

  }
}
