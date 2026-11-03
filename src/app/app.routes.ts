import { Routes } from '@angular/router';
import { CarList } from './car-list/car-list';
import { CarDetail } from './car-detail/car-detail';
import { CarForm } from './car-form/car-form';

export const routes: Routes = [
  { path: '', redirectTo: 'cars', pathMatch: 'full' },
  { path: 'cars', component: CarList },
  { path: 'cars/new', component: CarForm },   // must be above cars/:id
  { path: 'cars/:id', component: CarDetail },
];
