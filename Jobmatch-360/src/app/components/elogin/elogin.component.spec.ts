import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EloginComponent } from './elogin.component';

describe('EloginComponent', () => {
  let component: EloginComponent;
  let fixture: ComponentFixture<EloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EloginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
