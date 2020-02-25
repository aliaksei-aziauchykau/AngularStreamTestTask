import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IApplicationState } from 'src/app/modules/common/ng-rx/state/application.state';

export interface ICounterState {
  firstItem: number;
  secondItem: number;
}

export const counterFeatureKey = "counterState";
export const selectCounter = createFeatureSelector<IApplicationState, ICounterState>(counterFeatureKey);
export const selectCounterFirstItem = createSelector(selectCounter, (state: ICounterState) => state.firstItem);
export const selectCounterSecondItem = createSelector(selectCounter, (state: ICounterState) => state.secondItem);
