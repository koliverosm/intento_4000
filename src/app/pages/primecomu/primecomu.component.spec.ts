import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimecomuComponent } from './primecomu.component';

describe('PrimecomuComponent', () => {
  let component: PrimecomuComponent;
  let fixture: ComponentFixture<PrimecomuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrimecomuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimecomuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
