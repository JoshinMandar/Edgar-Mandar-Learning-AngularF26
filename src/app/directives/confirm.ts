import { Directive, input, output } from '@angular/core';

/**
 * Asks the user to confirm before an action runs.
 * Listens for the host's click, shows the browser's confirm() dialog,
 * and emits `confirmed` only when the user clicks OK.
 *
 * Usage:
 *   <button type="button" appConfirm="Delete this car?" (confirmed)="remove()">Delete</button>
 */
@Directive({
  selector: '[appConfirm]',
  host: {
    '(click)': 'ask()',
  },
})
export class Confirm {
  /** The question shown in the dialog. Falls back to a generic question when left empty. */
  question = input('', { alias: 'appConfirm' });
  confirmed = output<void>();

  protected ask(): void {
    const message = this.question() || 'Are you sure?';
    if (confirm(message)) {
      this.confirmed.emit();
    }
  }
}
