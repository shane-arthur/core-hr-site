import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreHrApproachComponent } from './core-hr-approach.component';

describe('CoreHrApproachComponent', () => {
  let component: CoreHrApproachComponent;
  let fixture: ComponentFixture<CoreHrApproachComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoreHrApproachComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoreHrApproachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
