import { Component, computed, inject, input, numberAttribute, OnDestroy, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TitleCasePipe, UpperCasePipe } from '@angular/common';
import { carList } from '../service/car';
import { MakeCountryPipe } from '../pipes/make-country-pipe';
import { SavedService } from '../service/saved-service';

@Component({
  imports: [RouterLink, TitleCasePipe, UpperCasePipe, MakeCountryPipe],
  selector: 'app-car-detail',
  styleUrl: './car-detail.css',
  templateUrl: './car-detail.html',
})
export class CarDetail implements OnInit, OnDestroy {
  id = input.required({ transform: numberAttribute });

  private service = inject(carList);
  protected saved = inject(SavedService);

  private openedAt = 0;
  private carName = '';

  protected car = computed(() =>
    this.service.carList().find(c => c.id === this.id())
  );

  ngOnInit(): void {
    const id = this.id();
    const car = this.service.carList().find(c => c.id === id);
    this.carName = car?.name ?? `car #${id}`;
    this.openedAt = Date.now();
    console.log(`[lifecycle] opened: ${this.carName}`);
  }

  ngOnDestroy(): void {
    const seconds = Math.round((Date.now() - this.openedAt) / 1000);
    console.log(`[lifecycle] closed: ${this.carName} after ${seconds} seconds`);
  }
}
