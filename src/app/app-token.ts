import { InjectionToken } from '@angular/core';

// Kept in its own file so services can import the token without importing
// app.config.ts (which imports those services) and creating a circular import.
export interface AppConfig {
  apiBaseURL: string;
  App: string;
}

export const USER_TOKEN = new InjectionToken<AppConfig>('App.config');
