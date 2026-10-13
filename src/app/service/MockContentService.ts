import {computed, effect, inject, Injectable, Service, signal} from '@angular/core';
import {Car} from '../model/car';
import {vi} from 'vitest';
import {USER_TOKEN} from '../app.config';

@Injectable()
export class MockContentService  {
  private config = inject(USER_TOKEN);

  private car = signal<Car[]>([
    {
      id: 1,
      vin: '12981273',
      name: ' Mock Calica',
      madeIn: 'Japan',
      carModel: 'Toyota',
      colour: 'gray'


    },
    {
      id: 2,
      vin: '1245125123',
      name: 'Mock crown',
      madeIn: 'Japan',
      carModel: 'Toyota',
      colour: 'blue',
    },
    {
      id: 3,
      vin: '243523532',
      name: 'Mock nissan',
      madeIn: 'Japan',
      carModel: 'Nissan',
      colour: 'white',

    },
    {
      id: 4,
      vin: '4124124',
      name: 'Mock mustang',
      madeIn: 'USA',
      carModel: 'Ford',
      colour: 'black',


    },
    {
      id: 5,
      vin: '4124142',
      name: 'Mock M1',
      madeIn: 'Germany',
      carModel: 'Bmw',
      colour: 'black',

    },
    {
      id: 6,
      vin: '124124',
      name: 'Mock CRV ',
      madeIn: 'Japan',
      carModel: 'Honda',
      colour: 'black',

    },
  ]);

  carList = this.car.asReadonly();

  blackCars = computed(() =>
    this.carList().filter(c => c.colour === 'black'));
  blackCarCount = computed(() =>
    this.blackCars().length
  );

  addCar(c: Car) {
    this.car.update(list => [...list, c])
  }

  removeCar(id: number) {
    this.car.update(list => list.filter(car => car.id !== id));
  }

  constructor() {

    effect(() => {
      console.log('Number of cars:', this.car().length);
    });

  }
}
