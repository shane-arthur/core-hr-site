import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreHrFooterComponent } from './core-hr-footer.component';

describe('CoreHrFooterComponent', () => {
  let component: CoreHrFooterComponent;
  let fixture: ComponentFixture<CoreHrFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoreHrFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoreHrFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
