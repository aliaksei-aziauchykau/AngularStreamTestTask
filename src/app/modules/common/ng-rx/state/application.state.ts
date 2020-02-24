import { Action } from '@ngrx/store';

import { ICounterState } from 'src/app/modules/counter/ng-rx/counter.state';
import { counterReducer } from 'src/app/modules/counter/ng-rx/counter.reducer';

type Reducer<TState> = (state: TState, action: Action) => TState;

export interface IApplicationState {
  counterState: ICounterState
}