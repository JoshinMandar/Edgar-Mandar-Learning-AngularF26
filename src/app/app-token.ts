import { InjectionToken } from '@angular/core';

export interface AppConfig {
  apiBaseURL: string;
  App: string;
}

export const USER_TOKEN = new InjectionToken<AppConfig>('App.config');
