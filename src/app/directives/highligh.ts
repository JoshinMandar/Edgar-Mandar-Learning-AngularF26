import { Directive, input, signal } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  host: {
    '(mouseenter)': 'active.set(true)',
    '(mouseleave)': 'active.set(false)',
    '[style.backgroun dColor]': "active() ? (color() || '#F4F1EA') : ''",
    '[class.highlighted]': 'active()',
  },
})
export class Highlight {
  color = input('', { alias: 'appHighlight' });
  protected active = signal(false);
}
