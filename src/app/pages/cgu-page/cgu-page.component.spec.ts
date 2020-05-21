import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CguPageComponent } from './cgu-page.component';

describe('CguPageComponent', () => {
  let component: CguPageComponent;
  let fixture: ComponentFixture<CguPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CguPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CguPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
