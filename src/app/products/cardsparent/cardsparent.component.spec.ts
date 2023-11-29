import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsparentComponent } from './cardsparent.component';

describe('CardsparentComponent', () => {
  let component: CardsparentComponent;
  let fixture: ComponentFixture<CardsparentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardsparentComponent]
    });
    fixture = TestBed.createComponent(CardsparentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
