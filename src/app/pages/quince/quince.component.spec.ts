import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuinceComponent } from './quince.component';

describe('QuinceComponent', () => {
  let component: QuinceComponent;
  let fixture: ComponentFixture<QuinceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuinceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuinceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
