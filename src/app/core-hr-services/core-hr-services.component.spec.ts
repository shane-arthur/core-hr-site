import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreHrServicesComponent } from './core-hr-services.component';

describe('CoreHrServicesComponent', () => {
  let component: CoreHrServicesComponent;
  let fixture: ComponentFixture<CoreHrServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoreHrServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoreHrServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
