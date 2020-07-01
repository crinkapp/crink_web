import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagnosticPageComponent } from './diagnostic-page.component';

describe('DiagnosticPageComponent', () => {
  let component: DiagnosticPageComponent;
  let fixture: ComponentFixture<DiagnosticPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiagnosticPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiagnosticPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
