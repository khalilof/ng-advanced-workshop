import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  settingsMap = new Map<string, any>();

  constructor() {
    this.settingsMap.set('background', true);
    this.settingsMap.set('compact-mode', false);
  }

  get(key: string): any {
    return this.settingsMap.get(key);
  }

  set(key: string, value: any): void {
    this.settingsMap.set(key, value);
  }

}
