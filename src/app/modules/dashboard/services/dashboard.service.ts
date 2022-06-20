import { Injectable } from '@angular/core';
import { ITable } from '../../../model/table.interface';
import { Observable, of, switchMap, timer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  addMealToCookingQueue(table: ITable): Observable<ITable> {
    return timer(5000).pipe(switchMap(() => {
      return of(table);
    }));
  }

}
