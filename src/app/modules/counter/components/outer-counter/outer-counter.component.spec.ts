import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OuterCounterComponent } from './outer-counter.component';
import { MatCardModule } from '@angular/material/card';
import { provideMockStore, MockStore } from '@ngrx/store/testing';

describe('OuterCounterComponent', () => {
  let component: OuterCounterComponent;
  let fixture: ComponentFixture<OuterCounterComponent>;
  let store: MockStore<{ }>;
  const initialState = { };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatCardModule
      ],
      declarations: [ OuterCounterComponent ],
      providers: [
        provideMockStore({ initialState }),
      ]
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
