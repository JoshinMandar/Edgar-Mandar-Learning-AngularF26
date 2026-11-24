import { Directive, input, signal } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  host: {
    '(mouseenter)': 'active.set(true)',
    '(mouseleave)': 'active.set(false)',
    '[style.backgroundColor]': "active() ? (color() || '#F4F1EA') : ''",
    '[class.highlighted]': 'active()',
  },
})
export class Highligh {
  color = input('', { alias: 'appHighlight' });
  protected active = signal(false);
}
