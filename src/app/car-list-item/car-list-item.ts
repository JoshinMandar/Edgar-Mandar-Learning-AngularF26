import {Component, input} from '@angular/core';
import {Car} from '../model/car';

@Component({
  imports: [],
  selector: 'app-car-list-item',
  styleUrl: './car-list-item.css',
  templateUrl: './car-list-item.html',
})
export class CarListItem {
  car = input.required<Car>();
}
