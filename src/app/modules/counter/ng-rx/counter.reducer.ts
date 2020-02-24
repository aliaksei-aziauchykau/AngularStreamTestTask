import { createReducer, on, Action } from '@ngrx/store';
import { increment, decrement, change } from './counter.actions';
import { ICounterState } from 'src/app/modules/counter/ng-rx/counter.state';
 
const initialState: ICounterState = {
  firstItem: -5,
  secondItem: 10
};

const _counterReducer = createReducer(initialState,
  on(increment, state => ({...state, firstItem: state.firstItem + 1 })),
  on(decrement, state => ({...state, secondItem: state.secondItem + 1 })),
);
 
export function counterReducer(state: ICounterState, action: Action) {
  return _counterReducer(state, action);
}