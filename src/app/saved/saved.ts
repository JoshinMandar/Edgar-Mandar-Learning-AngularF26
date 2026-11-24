import { Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Car } from '../model/car';
import { carList } from '../service/car';
import { SavedService } from '../service/saved-service';
import { Highligh } from '../directives/highligh';

@Component({
  imports: [RouterLink, Highligh],
  selector: 'app-saved',
  styleUrl: './saved.css',
  templateUrl: './saved.html',
})
export class Saved {
  private cars = inject(carList);
  private saved = inject(SavedService);

  protected isLoading = this.cars.isLoading;

  protected savedCars = computed(() => {
    const list = this.cars.carList();
    return this.saved
      .savedIds()
      .map(id => list.find(c => c.id === id))
      .filter((c): c is Car => c !== undefined);
  });
}
