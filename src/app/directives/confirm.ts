import { Directive, input, output } from '@angular/core';

@Directive({
  selector: '[appConfirm]',
  host: {
    '(click)': 'ask()',
  },
})
export class Confirm {
  question = input('', { alias: 'appConfirm' });
  confirmed = output<void>();
  protected ask(): void {
    const message = this.question() || 'Are you sure?';
    if (confirm(message)) {
      this.confirmed.emit();
    }
  }
}
