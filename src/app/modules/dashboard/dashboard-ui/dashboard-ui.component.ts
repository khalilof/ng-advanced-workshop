import { Component, HostBinding, OnInit } from '@angular/core';
import { ITable, TableStatus } from '../../../model/table.interface';
import { DashboardService } from '../services/dashboard.service';
import { SettingsService } from '../../settings/services/settings.service';

@Component({
  selector: 'app-dashboard-ui',
  templateUrl: './dashboard-ui.component.html',
  styleUrls: ['./dashboard-ui.component.scss']
})
export class DashboardUiComponent implements OnInit {
  @HostBinding('style.background-image')
  backgroundImage = this.settingsService.get('background') ? 'url(https://512pixels.net/wp-content/uploads/2020/06/11-0-Color-Day-thumbnails.jpg)' : 'none';

  tables: ITable[] = [];
  filterValue = '';
  TableStatus = TableStatus;
  compactMode = this.settingsService.get('compact-mode');

  constructor(private dashboardService: DashboardService, private settingsService: SettingsService) {

  }

  ngOnInit(): void {
    this.dashboardService.getTables().subscribe(tables => {
      this.tables = tables;
    });

    this.dashboardService.fetchTables();
  }

  applyFilter(filterValue: string): void {
    this.filterValue = filterValue;
    this.dashboardService.applyFilter(filterValue);
  }

  updateTableHandler($event: ITable) {
    this.dashboardService.updateTable($event);
  }
}
