import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CregistrationComponent } from './cregistration.component';

describe('CregistrationComponent', () => {
  let component: CregistrationComponent;
  let fixture: ComponentFixture<CregistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CregistrationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CregistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
