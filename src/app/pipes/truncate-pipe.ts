import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate',
})
export class TruncatePipe implements PipeTransform {
  transform(value: string | null | undefined, limit = 20, ending = '…'): string {
    if (typeof value !== 'string' || value.trim() === '') return '';
    const text = value.trim();
    if (limit <= 0 || text.length <= limit) return text;
    return text.slice(0, limit).trimEnd() + ending;
  }
}
