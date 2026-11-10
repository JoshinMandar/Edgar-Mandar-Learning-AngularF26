import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { EditLock } from '../service/edit-lock';

export const editGuard: CanActivateFn = () => {
  const lock = inject(EditLock);
  const router = inject(Router);


  return lock.guardEnabled() ? router.parseUrl('/cars') : true;
};
