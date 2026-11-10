import { Routes } from '@angular/router';
import { CarList } from './car-list/car-list';
import { CarDetail } from './car-detail/car-detail';
import { CarForm } from './car-form/car-form';
import {editGuard} from './Guard/edit-guard';
import { carResolver } from './car-resolver';

export const routes: Routes = [
  { path: '', redirectTo: 'cars', pathMatch: 'full' },
  { path: 'cars', component: CarList },
  { path: 'cars/new', component: CarForm },
  { path: 'cars/edit/:id', component: CarForm, canActivate:[editGuard] },   // new
  { path: 'cars/:id', component: CarDetail },
  { path: 'cars/:id', component: CarDetail, resolve: { loadedCar: carResolver } },
];
