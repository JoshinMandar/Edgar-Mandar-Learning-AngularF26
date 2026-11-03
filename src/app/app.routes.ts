import { Routes } from '@angular/router';
import {CarList} from './car-list/car-list';
import {CarDetail} from './car-detail/car-detail';

export const routes: Routes = [  { path: '', redirectTo: 'cars', pathMatch: 'full' },
  { path: 'cars', component: CarList},
  { path: 'cars/:id', component: CarDetail },];
