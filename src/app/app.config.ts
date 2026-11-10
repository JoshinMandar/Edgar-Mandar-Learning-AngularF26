import { ApplicationConfig, provideBrowserGlobalErrorListeners,InjectionToken } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { routes } from './app.routes';
import {carList} from './service/car';

export  interface AppConfig {
  apiBaseURL: string;
  App: string;
}

export const USER_TOKEN =new InjectionToken<AppConfig>('App.config');


export const appConfig: ApplicationConfig = {
  providers: [
    {provide:USER_TOKEN,
    useValue: {
      apiBaseURL: 'https://vpic.nhtsa.dot.gov/api/vehicles',
      App: 'all',
    }
    },

    carList,
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideRouter(routes, withComponentInputBinding())

  ]
};
