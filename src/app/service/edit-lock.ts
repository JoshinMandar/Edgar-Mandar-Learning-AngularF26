import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class EditLock {
  guardEnabled = signal<boolean>(true);

  toggle() {
    this.guardEnabled.update(v => !v);
  }
}
