import { Injectable } from '@angular/core';
import { ITable, MOCK_TABLES, TableStatus } from '../../../model/table.interface';
import { BehaviorSubject, map, Observable, Subject, withLatestFrom } from 'rxjs';
import { IMeal } from '../../../model/meal.interface';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  tables: ITable[] = [...MOCK_TABLES];

  tables$ = new Subject<ITable[]>();
  filterValue$ = new BehaviorSubject<string>('');

  filterValue = '';
  meals: IMeal[] = [];

  constructor() {
  }


  getTables(): Observable<ITable[]> {
    return this.tables$.pipe(withLatestFrom(this.filterValue$), map(([tables, filterValue]) => {
      if (filterValue.length > 0) {
        return tables.filter(table => table.status.includes(filterValue));
      } else {
        return tables;
      }
    }));
  }

  applyFilter(filterValue: string): void {
    this.filterValue$.next(filterValue);
    this.tables$.next(this.tables);
  }


  updateTable(table: ITable): void {
    const index = this.tables.findIndex(t => t.id === table.id);
    if (table.status === TableStatus.ORDERED) {
      this.startCookingForTable(table);
    } else {
      table.notify = false;
    }
    this.tables[index] = table;
    this.tables$.next(this.tables);
  }


  fetchTables(): void {
    this.tables = [...MOCK_TABLES];
    this.tables$.next(this.tables);
  }


  startCookingForTable(table: ITable) {
    const meal = {
      id: 1,
      tableId: table.id,
      status: 'pending',
      mealInfo: table.currentOrder,
    } as IMeal;
    this.addMeal(meal);
    this.startCooking(meal)
  }

  addMeal(meal: IMeal): void {
    this.meals.push(meal);
  }

  notifyTable(tableId: string): void {
    const index = this.tables.findIndex(t => t.id === tableId);
    this.tables[index].notify = true;
    this.tables$.next(this.tables);
  }

  updateMeal(meal: IMeal): void {
    const index = this.meals.findIndex(m => m.id === meal.id);
    this.meals[index] = meal;
  }

  private startCooking(meal: IMeal) {
    setTimeout(() => {
      this.updateMeal({
        ...meal,
        status: 'ready'
      });
      this.notifyTable(meal.tableId)
    }, 5000);
  }

}
