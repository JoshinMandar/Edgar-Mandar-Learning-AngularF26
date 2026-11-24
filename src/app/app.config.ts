import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { routes } from './app.routes';
import {carList} from './service/car';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { loadingInterceptor } from './loading-interceptor';
import { errorInterceptor } from './error-interceptor';
import { USER_TOKEN } from './app-token';

// Re-exported so existing imports from './app.config' keep working.
export { USER_TOKEN } from './app-token';
export type { AppConfig } from './app-token';


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
    provideRouter(routes, withComponentInputBinding()),
    provideHttpClient(withInterceptors([loadingInterceptor])),
    provideHttpClient(withInterceptors([loadingInterceptor, errorInterceptor]))

  ]
};
