import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestingTwoComponent } from './testing-two.component';

describe('TestingTwoComponent', () => {
  let component: TestingTwoComponent;
  let fixture: ComponentFixture<TestingTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestingTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestingTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
