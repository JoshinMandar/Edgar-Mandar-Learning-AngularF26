import { effect, Service, signal } from '@angular/core';
@Service()
export class SavedService {
  private readonly storageKey = 'car-explorer.saved';

  private saved = signal<number[]>(this.load());
  savedIds = this.saved.asReadonly();

  constructor() {
    effect(() => {
      const ids = this.saved();
      try {
        localStorage.setItem(this.storageKey, JSON.stringify(ids));
      } catch {
      }
    });
  }toggle(id: number): void {
    this.saved.update(ids =>
      ids.includes(id) ? ids.filter(x => x !== id) : [...ids, id],
    );
  }

  isSaved(id: number): boolean {
    return this.saved().includes(id);
  }

  private load(): number[] {
    try {
      const parsed: unknown = JSON.parse(localStorage.getItem(this.storageKey) ?? '[]');
      return Array.isArray(parsed) ? parsed.filter((x): x is number => typeof x === 'number') : [];
    } catch {
      return [];
    }
  }
}
