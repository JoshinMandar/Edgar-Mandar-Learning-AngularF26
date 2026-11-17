import {Component, input,output} from '@angular/core';
import {Car} from '../model/car';
import { RouterLink } from '@angular/router';
import {TitleCasePipe} from '@angular/common';
export interface ContentEvent {
  id: number;

}
@Component({
  imports: [RouterLink, TitleCasePipe],
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

