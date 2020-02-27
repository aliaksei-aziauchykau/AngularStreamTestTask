import { createAction, Store } from '@ngrx/store';
import { IApplicationState } from 'src/app/modules/common/ng-rx/state/application.state';
import { Injectable } from '@angular/core';

export const increase = createAction('[Counter Component] Increase');
export const decrease = createAction('[Counter Component] Decreaase');
export const change = createAction('[Counter Component] Change');
export const stop = createAction('[Counter Component] Stop');
export const start = createAction('[Counter Component] Start');
export const reset = createAction('[Counter Component] Reset');

@Injectable({
  providedIn: 'root'
})
export class CounterActions {
  constructor(private store: Store<IApplicationState>) {}

  public stopCounters() {
    return this.store.dispatch(stop());
  }

  public startCounters() {
    return this.store.dispatch(start());
  }

  public resetCounterState() {
    return this.store.dispatch(reset());
  }
}