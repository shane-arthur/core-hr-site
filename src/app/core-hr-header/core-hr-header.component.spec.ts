import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreHrHeaderComponent } from './core-hr-header.component';

describe('CoreHrHeaderComponent', () => {
  let component: CoreHrHeaderComponent;
  let fixture: ComponentFixture<CoreHrHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoreHrHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoreHrHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
