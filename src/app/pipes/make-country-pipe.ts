import { Pipe, PipeTransform } from '@angular/core';

const MAKE_COUNTRIES: Record<string, string> = {
  honda: 'Japan',
  toyota: 'Japan',
  nissan: 'Japan',
  mazda: 'Japan',
  subaru: 'Japan',
  ford: 'USA',
  chevrolet: 'USA',
  tesla: 'USA',
  bmw: 'Germany',
  audi: 'Germany',
  mercedes: 'Germany',
  hyundai: 'South Korea',
  kia: 'South Korea',
};

@Pipe({
  name: 'makeCountry',
})
export class MakeCountryPipe implements PipeTransform {
  transform(make: string | null | undefined): string {
    if (typeof make !== 'string' || make.trim() === '') return 'Unknown origin';
    return MAKE_COUNTRIES[make.trim().toLowerCase()] ?? 'Unknown origin';
  }
}
