import {Component, input,output} from '@angular/core';
import {Car} from '../model/car';
import { RouterLink } from '@angular/router';
export interface ContentEvent {
  id: number;

}
@Component({
  imports: [RouterLink],
  selector: 'app-car-list-item',
  styleUrl: './car-list-item.css',
  templateUrl: './car-list-item.html',
})
export class CarListItem {
  car = input.required<Car>();
  contentEvent = output<ContentEvent>();


  removeCar() {
    this.contentEvent.emit({
      id: this.car().id
    });

  }
}

