import { Component } from '@angular/core';
import {Car} from './model/car';
import {CarList} from './car-list/car-list';

@Component({
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
  imports: [
    CarList
  ]
})
export class App {
  protected title = 'Car type';
  protected carList: any;
}

 /* protected carList: Car [] = [
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
}*/
