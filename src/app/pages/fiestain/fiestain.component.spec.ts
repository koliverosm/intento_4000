import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiestainComponent } from './fiestain.component';

describe('FiestainComponent', () => {
  let component: FiestainComponent;
  let fixture: ComponentFixture<FiestainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiestainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FiestainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
