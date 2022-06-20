import { Component, HostBinding, OnInit } from '@angular/core';
import { ITable, TableStatus } from '../../../model/table.interface';
import { DashboardService } from '../services/dashboard.service';
import { HomeFacade } from '../../../+state/home.facade';

@Component({
  selector: 'app-dashboard-ui',
  templateUrl: './dashboard-ui.component.html',
  styleUrls: ['./dashboard-ui.component.scss']
})
export class DashboardUiComponent implements OnInit {
  @HostBinding('style.background-image')
  backgroundImage = 'none';
  compactMode = false;

  filterValue = '';
  TableStatus = TableStatus;

  backgroundSelector$ = this.homeFacade.backgroundSelector$;
  compactMode$ = this.homeFacade.compactMode$;
  selectTables$ = this.homeFacade.selectTables$;

  constructor(private dashboardService: DashboardService, private homeFacade: HomeFacade) {

  }

  ngOnInit(): void {

    this.backgroundSelector$.subscribe(background => {
      this.backgroundImage = background ? 'url(https://512pixels.net/wp-content/uploads/2020/06/11-0-Color-Day-thumbnails.jpg)' : 'none';
    });

    this.compactMode$.subscribe(compactMode => {
      this.compactMode = compactMode;
    });
  }

  applyFilter(filterValue: string): void {
    this.filterValue = filterValue;
    this.homeFacade.setFilterValue(filterValue);
  }

  updateTableHandler($event: ITable) {
    this.homeFacade.updateTable($event);
  }
}
