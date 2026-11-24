import { effect, Service, signal } from '@angular/core';

export type SortOrder = 'default' | 'az' | 'za';

const SORT_ORDERS: readonly SortOrder[] = ['default', 'az', 'za'];
@Service()
export class Preferences {
  private readonly storageKey = 'car-explorer.sortOrder';

  private order = signal<SortOrder>(this.load());
  sortOrder = this.order.asReadonly();

  constructor() {
    effect(() => {
      const value = this.order();
      try {
        localStorage.setItem(this.storageKey, JSON.stringify(value));
      } catch {
      }
    });
  }

  setSortOrder(value: SortOrder): void {
    this.order.set(value);
  }

  private load(): SortOrder {
    try {
      const parsed: unknown = JSON.parse(localStorage.getItem(this.storageKey) ?? '"default"');
      return SORT_ORDERS.includes(parsed as SortOrder) ? (parsed as SortOrder) : 'default';
    } catch {
      return 'default';
    }
  }
}
