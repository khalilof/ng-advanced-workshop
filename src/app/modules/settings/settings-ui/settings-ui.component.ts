import { Component } from '@angular/core';
import { HomeState } from '../../../+state/reducers/home.reducers';
import { Store } from '@ngrx/store';
import { selectBackground, selectCompactMode } from 'src/app/+state/selectors/home.selectors';
import { setBackground, setCompactMode } from '../../../+state/actions/home.actions';

@Component({
  selector: 'app-settings-ui',
  templateUrl: './settings-ui.component.html',
  styleUrls: ['./settings-ui.component.scss']
})
export class SettingsUiComponent {

  backgroundSelector$ = this.store.select(selectBackground);
  compactMode$ = this.store.select(selectCompactMode);

  constructor(private store: Store<HomeState>) {
  }


  switchHandler($event: boolean, attribute: string) {
    switch (attribute) {
      case 'background':
        this.store.dispatch(setBackground({background: $event}));
        break;
      case 'compact-mode':
        this.store.dispatch(setCompactMode({compactMode: $event}));
        break;
    }
  }
}
