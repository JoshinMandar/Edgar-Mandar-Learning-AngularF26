import { Component, computed, effect, inject, input, untracked } from '@angular/core';
import {
  AbstractControl, FormBuilder, ReactiveFormsModule, ValidationErrors, ValidatorFn, Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { carList } from '../service/car';

export function notBlank(control: AbstractControl): ValidationErrors | null {
  const v = control.value;
  return typeof v === 'string' && v.length > 0 && v.trim().length === 0
    ? { blank: true }
    : null;
}

export const nameNotSameAsMake: ValidatorFn = (group: AbstractControl): ValidationErrors | null => {
  const name = group.get('name')?.value?.trim().toLowerCase();
  const make = group.get('carModel')?.value?.trim().toLowerCase();
  return name && make && name === make ? { nameSameAsMake: true } : null;
};

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

  form = this.fb.nonNullable.group(
    {
      vin: ['', [Validators.required, Validators.minLength(5)]],
      name: ['', [Validators.required, notBlank]],
      madeIn: ['Japan'],
      carModel: ['Toyota'],
      colour: ['black'],
      features: this.fb.nonNullable.array<string>([]),   //bunos
    },
    { validators: nameNotSameAsMake },
  );


  get features() {
    return this.form.controls.features;
  }

  addFeature(value = '') {
    this.features.push(
      this.fb.nonNullable.control(value, [Validators.required, notBlank]),
    );
  }

  removeFeature(index: number) {
    this.features.removeAt(index);
  }

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

        this.features.clear();
        car.features?.forEach(f => this.addFeature(f));
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
      this.features.clear();
    }
  }
}
