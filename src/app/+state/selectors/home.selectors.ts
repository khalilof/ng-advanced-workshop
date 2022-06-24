import { createFeatureSelector, createSelector } from '@ngrx/store';
import { homeKey, HomeState } from '../reducers/home.reducers';
import { TableStatus } from '../../model/table.interface';


export const selectHomeState = createFeatureSelector<HomeState>(
  homeKey);


export const selectBackground = createSelector(selectHomeState, (state: HomeState) => state.background);
export const selectCompactMode = createSelector(selectHomeState, (state: HomeState) => state.compactMode);

export const selectFilteredTables = createSelector(selectHomeState, (state: HomeState) =>
  state.tables.filter(table => table.status.toLowerCase().includes(state.filterValue.toLowerCase())));


export const selectStatusCount = createSelector(selectHomeState, (state: HomeState) => {
  const statusCount = new Map<TableStatus, number>();
  state.tables.map(table => table.status).forEach(status => {
    statusCount.set(status, (statusCount.get(status) || 0) + 1);
  });
  return statusCount;
});
