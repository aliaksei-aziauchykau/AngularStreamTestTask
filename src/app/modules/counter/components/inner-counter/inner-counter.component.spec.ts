import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InnerCounterComponent } from './inner-counter.component';

describe('InnerCounterComponent', () => {
  let component: InnerCounterComponent;
  let fixture: ComponentFixture<InnerCounterComponent>;
  let store: MockStore<{ }>;
  const initialState = { };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InnerCounterComponent ],
      providers: [
        provideMockStore({ initialState }),
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InnerCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
