import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreHrContactUsComponent } from './core-hr-contact-us.component';

describe('CoreHrContactUsComponent', () => {
  let component: CoreHrContactUsComponent;
  let fixture: ComponentFixture<CoreHrContactUsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoreHrContactUsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoreHrContactUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
