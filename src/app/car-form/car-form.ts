import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
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

  form = this.fb.nonNullable.group({
    vin: ['', [Validators.required, Validators.minLength(5)]],
    name: ['', Validators.required],
    madeIn: ['Japan'],
    carModel: ['Toyota'],
    colour: ['black'],
  });

  onSubmit() {
    if (this.form.invalid) return;

    const value = this.form.getRawValue();
    const list = this.service.carList();
    const id = list.length ? Math.max(...list.map(c => c.id)) + 1 : 1;

    this.service.addCar({ id, ...value });
    this.form.reset();
  }
}
