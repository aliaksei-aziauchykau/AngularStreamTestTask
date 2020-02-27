import { TestBed, async } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { cold, hot } from 'jasmine-marbles';
import { Observable } from 'rxjs';
import { CounterEffects } from 'src/app/modules/counter/ng-rx/counter.effects';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { IApplicationState } from 'src/app/modules/common/ng-rx/state/application.state';
import { change, increase, decrease } from 'src/app/modules/counter/ng-rx/counter.actions';
import { Store } from '@ngrx/store';
import { firstItemSelectCounter } from 'src/app/modules/counter/ng-rx/counter.selectors';

describe('CouterEffects', () => {
  let actions: Observable<any>; 
  let effects: CounterEffects;
  let mockStore: MockStore<IApplicationState>;
  const initialState: IApplicationState = {
    counterState: {
      firstItem: -5,
      secondItem: 10
    }
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        CounterEffects,
        provideMockActions(() => actions),
        provideMockStore({ initialState }),
      ]
    });

    effects = TestBed.get(CounterEffects);
    mockStore = TestBed.get(Store);
    mockStore.overrideSelector(firstItemSelectCounter, 10);
  }));

  describe('Change action', () => {
    it('should return a stream with todo list loaded action', () => {
      const income = change();
      const outcome = { 
        x: increase(), 
        y: decrease(), 
        z: decrease()
      };

      actions = hot('-a', { a: income });
      const expected = cold('-(xyz)', outcome);
      expect(effects.change$).toBeObservable(expected);
    });
  });
});