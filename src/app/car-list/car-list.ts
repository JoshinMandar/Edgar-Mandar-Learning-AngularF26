import { Component } from '@angular/core';
import {Car} from '../model/car';
import {CarListItem} from '../car-list-item/car-list-item';

@Component({
  imports: [
    CarListItem
  ],
  selector: 'app-car-list',
  styleUrl: './car-list.css',
  templateUrl: './car-list.html',
})

export class CarList {
  carList: Car [] = [
    {
      vin: '1234567890',
      name: 'Rav4',
      madeIn: 'Japan',
      carModel:'Toyota',
      colour: 'gray',
    },
    {
      vin: '1234567890',
      name: 'supra',
      madeIn: 'Japan',
      carModel:'Toyota',
      colour: 'blue',
    },
    {
      vin: '1234567890',
      name: 'Nissan GT R',
      madeIn: 'Japan',
      carModel:'Nissan',
      colour: 'white',
    },
    {
      vin: '1234567890',
      name: 'Raptor',
      madeIn: 'USA',
      carModel:'Ford',
      colour: 'black',
    },
    {
      vin: '1234567890',
      name: 'M5',
      madeIn: 'Germany',
      carModel:'bmw',
      colour: 'black',
    },
    {
      vin: '1234567890',
      name: 'Civic ',
      madeIn: 'Japan',
      carModel:'Honda',
      colour: 'Black',
    },
  ];

  protected readonly Cache = Cache;
}
