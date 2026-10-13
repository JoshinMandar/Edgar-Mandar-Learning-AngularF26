import { ApplicationConfig, provideBrowserGlobalErrorListeners,InjectionToken } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

export  interface AppConfig {
  apiBaseURL: string;
  App: string;
}

export const USER_TOKEN =new InjectionToken<AppConfig>('App.config');


export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes)
  ]
};
