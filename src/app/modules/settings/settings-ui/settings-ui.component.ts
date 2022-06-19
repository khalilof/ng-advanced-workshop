import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../services/settings.service';

@Component({
  selector: 'app-settings-ui',
  templateUrl: './settings-ui.component.html',
  styleUrls: ['./settings-ui.component.scss']
})
export class SettingsUiComponent implements OnInit {
  background: boolean;
  compactMode: boolean;

  constructor(private settingsService: SettingsService) {
    this.background = this.settingsService.get('background');
    this.compactMode = this.settingsService.get('compact-mode');
  }

  ngOnInit(): void {
  }

  switchHandler($event: boolean, attribute: string) {
    this.settingsService.set(attribute, $event);
  }
}
