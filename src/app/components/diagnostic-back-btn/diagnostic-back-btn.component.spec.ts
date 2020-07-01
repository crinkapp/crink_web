import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagnosticBackBtnComponent } from './diagnostic-back-btn.component';

describe('DiagnosticBackBtnComponent', () => {
  let component: DiagnosticBackBtnComponent;
  let fixture: ComponentFixture<DiagnosticBackBtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiagnosticBackBtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiagnosticBackBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
