import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateportalComponent } from './candidateportal.component';

describe('CandidateportalComponent', () => {
  let component: CandidateportalComponent;
  let fixture: ComponentFixture<CandidateportalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CandidateportalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CandidateportalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
