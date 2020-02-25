import { createReducer, on, Action } from '@ngrx/store';
import { increase, decrease, change } from './counter.actions';
import { ICounterState } from 'src/app/modules/counter/ng-rx/counter.state';

const initialState: ICounterState = {
  firstItem: -5,
  secondItem: 10
};

const _counterReducer = createReducer(initialState,
  on(increase, state => ({...state, firstItem: state.firstItem + 1 })),
  on(decrease, state => ({...state, secondItem: state.secondItem - 1 })),
);

export function counterReducer(state: ICounterState, action: Action) {
  return _counterReducer(state, action);
}
