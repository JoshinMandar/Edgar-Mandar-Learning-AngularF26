import { Routes } from '@angular/router';
import { CarList } from './car-list/car-list';
import { editGuard } from './Guard/edit-guard';
import { carResolver } from './car-resolver';

export const routes: Routes = [
  { path: '', redirectTo: 'cars', pathMatch: 'full' },
  { path: 'cars', component: CarList },
  {
    path: 'cars/new',
    loadComponent: () => import('./car-form/car-form').then(m => m.CarForm),
  },
  {
    path: 'cars/edit/:id',
    loadComponent: () => import('./car-form/car-form').then(m => m.CarForm),
    canActivate: [editGuard],
  },
  {
    path: 'cars/:id',
    loadComponent: () => import('./car-detail/car-detail').then(m => m.CarDetail),
    resolve: { loadedCar: carResolver },
  },
  {
    path: '**',
    loadComponent: () => import('./not-found/not-found').then(m => m.NotFound),
  },
];
