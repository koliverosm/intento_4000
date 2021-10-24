import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuienessComponent } from './quieness.component';

describe('QuienessComponent', () => {
  let component: QuienessComponent;
  let fixture: ComponentFixture<QuienessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuienessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuienessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
