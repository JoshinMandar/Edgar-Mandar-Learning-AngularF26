import { Component, computed, inject} from '@angular/core';
import { Preferences, SortOrder } from '../service/preferences';
import {CarListItem, ContentEvent} from '../car-list-item/car-list-item';
import {carList} from '../service/car';
import {USER_TOKEN,} from '../app-token';
import { DecimalPipe } from '@angular/common';
import { Highligh } from '../directives/highligh';

@Component({
  imports: [
    CarListItem,
    DecimalPipe,
    Highligh
  ],
  selector: 'app-car-list',
  styleUrl: './car-list.css',
  templateUrl: './car-list.html',
})

export class CarList {
 protected carList=inject(carList).carList;

 private service = inject(carList);


  carEvent(event: ContentEvent): void {
    this.service.removeCar(event.id);
  }

  protected readonly CarList = carList;
  protected blackCars = this.service.blackCars
  protected blackCarCount = this.service.blackCarCount
  protected config = inject(USER_TOKEN);
  protected isLoading = this.service.isLoading;
  protected error = this.service.error;

  private prefs = inject(Preferences);
  protected sortOrder = this.prefs.sortOrder;

  protected sortedCars = computed(() => {
    const list = this.carList();
    switch (this.sortOrder()) {
      case 'az': return [...list].sort((a, b) => a.name.localeCompare(b.name));
      case 'za': return [...list].sort((a, b) => b.name.localeCompare(a.name));
      default: return list;
    }
  });

  setSortOrder(value: string): void {
    this.prefs.setSortOrder(value as SortOrder);
  }
}
