import { Component, HostBinding, OnInit } from '@angular/core';
import { ITable, TableStatus } from '../../../model/table.interface';
import { DashboardService } from '../services/dashboard.service';
import { selectBackground, selectCompactMode, selectFilteredTables } from '../../../+state/selectors/home.selectors';
import { Store } from '@ngrx/store';
import { HomeState } from '../../../+state/reducers/home.reducers';
import { setFilterValue, updateTable } from '../../../+state/actions/home.actions';

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

  backgroundSelector$ = this.store.select(selectBackground);
  compactMode$ = this.store.select(selectCompactMode);
  selectTables$ = this.store.select(selectFilteredTables);

  constructor(private dashboardService: DashboardService, private store: Store<HomeState>) {

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
    this.store.dispatch(setFilterValue({filterValue}));
  }

  updateTableHandler($event: ITable) {
    this.store.dispatch(updateTable({table: $event}));
  }
}
