import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OuterCounterComponent } from './outer-counter.component';

describe('OuterCounterComponent', () => {
  let component: OuterCounterComponent;
  let fixture: ComponentFixture<OuterCounterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OuterCounterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OuterCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
