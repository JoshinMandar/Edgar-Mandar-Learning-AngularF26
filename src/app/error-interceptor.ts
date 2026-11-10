import { inject } from '@angular/core';
import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';
import { ErrorService } from './service/error';

function friendlyMessage(status: number): string {
  if (status === 0) return 'Network problem, or the browser blocked the request.';
  if (status === 404) return 'The data you asked for was not found.';
  if (status >= 500) return 'The server had a problem. Please try again later.';
  return `Something went wrong (error ${status}).`;
}

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  const errors = inject(ErrorService);
  return next(req).pipe(
    catchError((err: HttpErrorResponse) => {
      errors.show(friendlyMessage(err.status));
      return throwError(() => err);
    }),
  );
};
