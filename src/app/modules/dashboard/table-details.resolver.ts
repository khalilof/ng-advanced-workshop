import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { DashboardService } from './services/dashboard.service';
import { ITable } from '../../model/table.interface';

@Injectable({
  providedIn: 'root'
})
export class TableDetailsResolver implements Resolve<ITable | undefined> {

  constructor(private dash: DashboardService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ITable | undefined> {
    return of(this.dash.getTables().find(t => t.id === route.params['id']));
  }
}
