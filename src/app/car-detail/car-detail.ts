import { Component, computed, inject, input, numberAttribute } from '@angular/core';
import { RouterLink } from '@angular/router';
import { carList } from '../service/car';
import {TitleCasePipe, UpperCasePipe} from '@angular/common';
@Component({
  imports: [
    RouterLink, TitleCasePipe, UpperCasePipe
  ],
  selector: 'app-car-detail',
  styleUrl: './car-detail.css',
  templateUrl: './car-detail.html',
})
export class CarDetail {
  id = input.required({ transform: numberAttribute });

  private service = inject(carList);

  protected car = computed(() =>
    this.service.carList().find(c => c.id === this.id())
  );
}
