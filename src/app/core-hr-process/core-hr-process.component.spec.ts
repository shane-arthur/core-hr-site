import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreHrProcessComponent } from './core-hr-process.component';

describe('CoreHrProcessComponent', () => {
  let component: CoreHrProcessComponent;
  let fixture: ComponentFixture<CoreHrProcessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoreHrProcessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoreHrProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
