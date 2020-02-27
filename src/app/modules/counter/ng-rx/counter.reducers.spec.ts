import { decrease } from "src/app/modules/counter/ng-rx/counter.actions";
import { counterReducer } from 'src/app/modules/counter/ng-rx/counter.reducers';
import { Action } from '@ngrx/store';
import { ICounterState } from 'src/app/modules/counter/ng-rx/counter.state';

describe('Counter reducer', () => {
  describe('default', () => {
    it('should return init state', () => {
      const newState = counterReducer(undefined, {} as Action);

      const initState: ICounterState = {
        firstItem: -5,
        secondItem: 10
      };
      expect(newState).toEqual(initState);
    });
  });

  describe('decrease', () => {
    it('should return decreased value', () => {
      const decreaseAction = decrease();
      const newState = counterReducer(undefined, decreaseAction);

      const expectedState: ICounterState = {
        firstItem: -5,
        secondItem: 9
      };
      expect(newState).toEqual(expectedState);
    });
  });
});