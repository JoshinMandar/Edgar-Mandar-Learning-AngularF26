import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ErrorService {
  message = signal<string | null>(null);

  show(text: string) {
    this.message.set(text);
  }

  clear() {
    this.message.set(null);
  }
}
