import { computed, effect, inject, Injectable, signal } from '@angular/core';
import { httpResource } from '@angular/common/http';
import { ApiCarResponse, Car, isApiCarModel, toCar } from '../model/car';
import { USER_TOKEN } from '../app-token';

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

  private readonly myCarsKey = 'car-explorer.myCars';
  private myCars = signal<Car[]>(this.loadMyCars());

  carList = computed(() =>
    this.carResource.error() ? this.myCars() : [...this.car(), ...this.myCars()],
  );
  isLoading = this.carResource.isLoading;
  error = this.carResource.error;

  blackCars = computed(() =>
    this.carList().filter(c => c.colour === 'black'));
  blackCarCount = computed(() =>
    this.blackCars().length
  );

  addCar(c: Car) {
    this.myCars.update(list => [...list, c]);
  }
  updateCar(updated: Car) {
    if (this.isMyCar(updated.id)) {
      this.myCars.update(list => list.map(c => (c.id === updated.id ? updated : c)));
    } else {
      this.car.update(list => list.map(c => (c.id === updated.id ? updated : c)));
    }
  }
  removeCar(id: number) {
    if (this.isMyCar(id)) {
      this.myCars.update(list => list.filter(car => car.id !== id));
    } else {
      this.car.update(list => list.filter(car => car.id !== id));
    }
  }

  private isMyCar(id: number): boolean {
    return this.myCars().some(c => c.id === id);
  }

  private loadMyCars(): Car[] {
    try {
      const parsed: unknown = JSON.parse(localStorage.getItem(this.myCarsKey) ?? '[]');
      return Array.isArray(parsed) ? parsed.filter(isStoredCar) : [];
    } catch {
      return [];
    }
  }

  constructor() {
    effect(() => {
      console.log('Number of cars:', this.carList().length);
    });
    effect(() => {
      const cars = this.myCars();
      try {
        localStorage.setItem(this.myCarsKey, JSON.stringify(cars));
      } catch {
      }
    });
  }
}

function isStoredCar(x: unknown): x is Car {
  const c = x as Car;
  return !!c
    && typeof c.id === 'number'
    && typeof c.name === 'string'
    && typeof c.carModel === 'string'
    && (c.features === undefined || (Array.isArray(c.features) && c.features.every(f => typeof f === 'string')));
}
