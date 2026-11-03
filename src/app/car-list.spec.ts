import { TestBed } from '@angular/core/testing';
import { CarList } from './car-list';

describe('CarList', () => {
  let service: CarList;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarList);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
