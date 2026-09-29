import {Component, input,output} from '@angular/core';
import {Car} from '../model/car';
export interface ContentEvent {
  id: number;
  action: 'opened' | 'favourited';
}


@Component({
  imports: [],
  selector: 'app-car-list-item',
  styleUrl: './car-list-item.css',
  templateUrl: './car-list-item.html',
})
export class CarListItem {
  car = input.required<Car>();
  contentEvent = output<ContentEvent>();

  openCar(): void {
    this.contentEvent.emit({
      id: this.car().id, action: 'opened',

    });
  }
}

