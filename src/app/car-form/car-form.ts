import { Component, computed, effect, inject, input, untracked } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { carList } from '../service/car';


@Component({
  selector: 'app-car-form',
  imports: [ReactiveFormsModule],
  templateUrl: './car-form.html',
  styleUrl: './car-form.css',
})
export class CarForm {
  private fb = inject(FormBuilder);
  private service = inject(carList);
  private router = inject(Router);

  id = input<string>();
  protected isEdit = computed(() => this.id() !== undefined);

  form = this.fb.nonNullable.group({
    vin: ['', [Validators.required, Validators.minLength(5)]],
    name: ['', Validators.required],
    madeIn: ['Japan'],
    carModel: ['Toyota'],
    colour: ['black'],
  });

  constructor() {
    effect(() => {
      const rawId = this.id();
      if (rawId === undefined) return;

      const car = untracked(() =>
        this.service.carList().find(c => c.id === Number(rawId))
      );
      if (car) {
        this.form.patchValue({
          vin: car.vin,
          name: car.name,
          madeIn: car.madeIn,
          carModel: car.carModel,
          colour: car.colour,
        });
      }
    });
  }
  onSubmit() {
    if (this.form.invalid) return;
    const value = this.form.getRawValue();
    const rawId = this.id();

    if (rawId !== undefined) {
      const id = Number(rawId);
      this.service.updateCar({ id, ...value });
      this.router.navigate(['/cars', id]);
    } else {
      const list = this.service.carList();
      const id = list.length ? Math.max(...list.map(c => c.id)) + 1 : 1;
      this.service.addCar({ id, ...value });
      this.form.reset();
    }
  }
}
