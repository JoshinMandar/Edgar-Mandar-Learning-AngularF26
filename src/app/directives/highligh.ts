import { Directive, input, signal } from '@angular/core';

/**
 * Highlights its host element while the mouse is over it.
 * Usage:
 *   <div appHighlight>...</div>              default colour
 *   <div appHighlight="#FDE7C8">...</div>    custom colour
 */
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
  /** Colour to use while hovered. Empty string falls back to the default '#F4F1EA'. */
  color = input('', { alias: 'appHighlight' });
  protected active = signal(false);
}
