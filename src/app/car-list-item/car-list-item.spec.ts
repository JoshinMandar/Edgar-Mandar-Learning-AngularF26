import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CarListItem } from './car-list-item';

describe('CarListItem', () => {
  let component: CarListItem;
  let fixture: ComponentFixture<CarListItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarListItem],
    }).compileComponents();

    fixture = TestBed.createComponent(CarListItem);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
