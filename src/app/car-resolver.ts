import { inject } from '@angular/core';
import { toObservable } from '@angular/core/rxjs-interop';
import { ResolveFn } from '@angular/router';
import { filter, map, take } from 'rxjs';
import { Car } from './model/car';
import { carList } from './service/car';


export const carResolver: ResolveFn<Car | undefined> = (route) => {
  const service = inject(carList);
  const id = Number(route.paramMap.get('id'));
  return toObservable(service.isLoading).pipe(
    filter(loading => !loading),
    take(1),
    map(() => service.carList().find(c => c.id === id)),
  );
};
