import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiestaemComponent } from './fiestaem.component';

describe('FiestaemComponent', () => {
  let component: FiestaemComponent;
  let fixture: ComponentFixture<FiestaemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiestaemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FiestaemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
