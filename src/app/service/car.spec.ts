import { TestBed } from '@angular/core/testing';
import {carList} from './car';

describe('CarService', () => {
  let service: carList;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(carList);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
