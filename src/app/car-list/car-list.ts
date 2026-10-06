import { Component, inject} from '@angular/core';
import {CarListItem, ContentEvent} from '../car-list-item/car-list-item';
import {carList} from '../service/car';

@Component({
  imports: [
    CarListItem
  ],
  selector: 'app-car-list',
  styleUrl: './car-list.css',
  templateUrl: './car-list.html',
})

export class CarList {
 protected carList=inject(carList).carList;

 private service = inject(carList);


  carEvent(event: ContentEvent): void {
    console.log(event)
  }

  protected readonly CarList = carList;
  protected blackCars = this.service.blackCars
  protected blackCarCount = this.service.blackCarCount
}
