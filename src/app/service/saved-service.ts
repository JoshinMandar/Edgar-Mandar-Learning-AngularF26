import { effect, Service, signal } from '@angular/core';

/**
 * Remembers which cars the user has saved.
 * Only the car ids are stored in localStorage; the car data itself
 * always comes from the API.
 */
@Service()
export class SavedService {
  private readonly storageKey = 'car-explorer.saved';

  private saved = signal<number[]>(this.load());
  savedIds = this.saved.asReadonly();

  constructor() {
    // The only place we write to localStorage: runs every time `saved` changes.
    effect(() => {
      const ids = this.saved();
      try {
        localStorage.setItem(this.storageKey, JSON.stringify(ids));
      } catch {
        // Storage full or blocked (e.g. private browsing): keep working in memory.
      }
    });
  }

  /** Add the id if it is missing, remove it if it is already saved. */
  toggle(id: number): void {
    this.saved.update(ids =>
      ids.includes(id) ? ids.filter(x => x !== id) : [...ids, id],
    );
  }

  isSaved(id: number): boolean {
    return this.saved().includes(id);
  }

  /** Read the saved ids once at startup. Missing or invalid data gives an empty list. */
  private load(): number[] {
    try {
      const parsed: unknown = JSON.parse(localStorage.getItem(this.storageKey) ?? '[]');
      return Array.isArray(parsed) ? parsed.filter((x): x is number => typeof x === 'number') : [];
    } catch {
      return [];
    }
  }
}
