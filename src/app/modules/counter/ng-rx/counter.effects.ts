import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap } from 'rxjs/operators';

Injectable()
export class CounterEffects {
 
  change$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[Movies Page] Load Movies'),
      tap(action => console.log(action))
    )
  );
 
  constructor(
    private actions$: Actions,
  ) {}
}