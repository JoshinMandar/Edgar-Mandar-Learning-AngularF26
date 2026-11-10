import { computed, effect, inject, Injectable } from '@angular/core';
import { httpResource } from '@angular/common/http';
import { ApiCarResponse, Car, isApiCarModel, toCar } from '../model/car';
import { USER_TOKEN } from '../app.config';

@Injectable()
export class carList {
  private config = inject(USER_TOKEN);
  private make = 'honda';

  private carResource = httpResource<Car[]>(
    () => ({
      url: `${this.config.apiBaseURL}/getmodelsformake/${this.make}`,
      params: { format: 'json' },
    }),
    {
      parse: (raw: unknown): Car[] => {
        const results = (raw as ApiCarResponse | null)?.Results;
        if (!Array.isArray(results)) return [];
        return results.filter(isApiCarModel).slice(0, 20).map(toCar);},
      defaultValue: [],
    },
  );
  private car = this.carResource.value;

  carList = computed(() => (this.carResource.error() ? [] : this.car()));
  isLoading = this.carResource.isLoading;
  error = this.carResource.error;

  blackCars = computed(() =>
    this.carList().filter(c => c.colour === 'black'));
  blackCarCount = computed(() =>
    this.blackCars().length
  );

  addCar(c: Car) {
    this.car.update(list => [...list, c]);
  }
  updateCar(updated: Car) {
    this.car.update(list => list.map(c => (c.id === updated.id ? updated : c)));
  }
  removeCar(id: number) {
    this.car.update(list => list.filter(car => car.id !== id));
  }

  constructor() {
    effect(() => {
      console.log('Number of cars:', this.carList().length);
    });
  }
}
