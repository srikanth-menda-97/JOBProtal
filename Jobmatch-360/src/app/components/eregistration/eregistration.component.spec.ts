import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EregistrationComponent } from './eregistration.component';

describe('EregistrationComponent', () => {
  let component: EregistrationComponent;
  let fixture: ComponentFixture<EregistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EregistrationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EregistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
