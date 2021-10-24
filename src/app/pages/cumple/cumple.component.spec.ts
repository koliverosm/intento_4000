import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CumpleComponent } from './cumple.component';

describe('CumpleComponent', () => {
  let component: CumpleComponent;
  let fixture: ComponentFixture<CumpleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CumpleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CumpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
