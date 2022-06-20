import { Injectable } from '@angular/core';
import { KitchenService } from './kitchen.service';
import { ITable, MOCK_TABLES, TableStatus } from '../../../model/table.interface';
import { map, Observable, Subject, withLatestFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  tables: ITable[] = [...MOCK_TABLES];

  tables$ = new Subject<ITable[]>();
  filterValue$ = new Subject<string>();

  filterValue = '';

  constructor(private kitchenService: KitchenService) {
    this.kitchenService.setTables(this.tables);
    //console.log('constructor', this.tables);
    this.tables$.next(this.tables);
  }

  /*getTables(): ITable[] {
    return this.tables;
  }*/

  loadTables(): void {
    this.tables$.next(this.tables);
  }

  getTables(): Observable<ITable[]> {
    return this.tables$.pipe(withLatestFrom(this.filterValue$), map(([tables, filterValue]) => {
      console.log('getTables', tables, filterValue);
      if (filterValue.length > 0) {
        return tables.filter(table => table.status.includes(filterValue));
      } else {
        return tables;
      }
    }));
  }

  applyFilter(filterValue: string): void {
    this.filterValue$.next(filterValue);
  }


  updateTable(table: ITable): void {
    const index = this.tables.findIndex(t => t.id === table.id);
    if (table.status === TableStatus.ORDERED) {
      this.kitchenService.startCookingForTable(table);
    } else {
      table.notify = false;
    }
    this.tables[index] = table;
    this.tables$.next(this.tables);
  }

  /* updateTable(table: ITable): void {
     const index = this.tables.findIndex(t => t.id === table.id);
     if (table.status === TableStatus.ORDERED) {
       this.kitchenService.startCookingForTable(table);
     } else {
       table.notify = false;
     }
     this.tables[index] = table;
   }*/


}
