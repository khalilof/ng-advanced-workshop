import { Component } from '@angular/core';
import { HomeState } from './+state/reducers/home.reducers';
import { Store } from '@ngrx/store';
import { loadTables } from './+state/actions/home.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-advanced';

  constructor(private store: Store<HomeState>) {
  }

  ngOnInit(): void {
    this.store.dispatch(loadTables());
  }
}
