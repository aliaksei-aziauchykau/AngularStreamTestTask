import { createReducer, on, Action } from '@ngrx/store';
import { increase, decrease, reset } from './counter.actions';
import { ICounterState } from 'src/app/modules/counter/ng-rx/counter.state';

const initialState: ICounterState = {
  firstItem: -5,
  secondItem: 10
};

const _counterReducer = createReducer(initialState,
  on(increase, state => ({...state, firstItem: state.firstItem + 1 })),
  on(decrease, state => ({...state, secondItem: state.secondItem - 1 })),
  on(reset, _ => ({...initialState})),
);

export function counterReducer(state: ICounterState, action: Action) {
  return _counterReducer(state, action);
}
