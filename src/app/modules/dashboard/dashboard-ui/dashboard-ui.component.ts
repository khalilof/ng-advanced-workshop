import { Component, HostBinding, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ITable, TableStatus } from '../../../model/table.interface';
import { DashboardService } from '../services/dashboard.service';
import { SettingsService } from '../../settings/services/settings.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-ui',
  templateUrl: './dashboard-ui.component.html',
  styleUrls: ['./dashboard-ui.component.scss'],
  // ChangeDetectionStrategy: 'OnPush'
})
export class DashboardUiComponent implements OnInit, OnChanges {
  @HostBinding('style.background-image')
  backgroundImage = this.settingsService.get('background') ? 'url(https://512pixels.net/wp-content/uploads/2020/06/11-0-Color-Day-thumbnails.jpg)' : 'none';

  tables: ITable[] = [];
  filterValue = '';
  TableStatus = TableStatus;
  compactMode = this.settingsService.get('compact-mode');

  constructor(private dashboardService: DashboardService, private settingsService: SettingsService, private router: Router) {

  }

  ngOnChanges(simple: SimpleChanges): void {
    console.log(simple);
  }

  ngOnInit(): void {
    this.tables = this.dashboardService.getTables();
  }

  applyFilter(filterValue: string): void {
    this.filterValue = filterValue;
    if (filterValue.length > 0) {
      this.tables = this.dashboardService.getTables().filter(table => table.status.includes(filterValue));
    } else {
      this.tables = this.dashboardService.getTables();
    }
  }

  updateTableHandler($event: ITable) {
    this.dashboardService.updateTable($event);
  }
}
