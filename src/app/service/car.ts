import { Service, signal } from '@angular/core';
import {Car} from '../model/car';

@Service()
export class CarService {
  private car = signal<Car[]>([
    {  id:1,
  vin: '12981273',
  name: 'Rav4',
  madeIn: 'Japan',
  carModel:'Toyota',
  colour: 'gray'

},
{ id:2,
  vin: '1245125123',
  name: 'supra',
  madeIn: 'Japan',
  carModel:'Toyota',
  colour: 'blue',
},
{ id:3,
  vin: '243523532',
  name: 'Nissan GT R',
  madeIn: 'Japan',
  carModel:'Nissan',
  colour: 'white',

},
{id:4,
  vin: '4124124',
  name: 'Raptor',
  madeIn: 'USA',
  carModel:'Ford',
  colour: 'black',



},
{ id:5,
  vin: '4124142',
  name: 'M5',
  madeIn: 'Germany',
  carModel:'Bmw',
  colour: 'black',

},
{id:6,
  vin: '124124',
  name: 'Civic ',
  madeIn: 'Japan',
  carModel:'Honda',
  colour: 'Black',

},
  ]);

  carList = this.car.asReadonly();
}
