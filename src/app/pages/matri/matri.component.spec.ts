import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatriComponent } from './matri.component';

describe('MatriComponent', () => {
  let component: MatriComponent;
  let fixture: ComponentFixture<MatriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatriComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
