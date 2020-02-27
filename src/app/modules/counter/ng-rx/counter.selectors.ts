import { createFeatureSelector, createSelector, Store } from '@ngrx/store';
import { IApplicationState } from 'src/app/modules/common/ng-rx/state/application.state';
import { Injectable } from '@angular/core';
import { ICounterState, counterFeatureKey } from 'src/app/modules/counter/ng-rx/counter.state';

export const selectCounter = createFeatureSelector<IApplicationState, ICounterState>(counterFeatureKey);
export const firstItemSelectCounter = createSelector(selectCounter, (state: ICounterState) => state.firstItem);
export const secondItemSelectCounter = createSelector(selectCounter, (state: ICounterState) => state.secondItem);

@Injectable({
  providedIn: 'root'
})
export class CounterSelector {
  constructor(private store: Store<IApplicationState>) {}

  public getFirstItem() {
    return this.store.select(firstItemSelectCounter);
  }

  public getSecondItem() {
    return this.store.select(secondItemSelectCounter);
  }
}