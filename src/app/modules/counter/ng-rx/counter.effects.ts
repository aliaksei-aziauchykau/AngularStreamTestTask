import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { takeUntil, switchMap, map, exhaustMap } from 'rxjs/operators';
import { timer } from 'rxjs';
import { increase, decrease, change } from "./counter.actions";

@Injectable()
export class CounterEffects {

  change$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[Counter Component] Change'),
      switchMap(_ => [
        increase(),
        decrease(),
        decrease()
      ])
    )
  );

  interval$ = createEffect(() =>
      this.actions$.pipe(
        ofType('[Counter Component] Start'),
        exhaustMap(() => timer(0, 1000).pipe(
          takeUntil(this.actions$.pipe(
            ofType('[Counter Component] Stop')
          ))
        )),
        map(_ => change())
      )
  );

  constructor(
    private actions$: Actions,
  ) {}
}
