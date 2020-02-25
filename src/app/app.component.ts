import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { IApplicationState } from 'src/app/modules/common/ng-rx/state/application.state';
import { start, stop } from 'src/app/modules/counter/ng-rx/counter.actions';
import { Observable } from 'rxjs';
import { selectCounterFirstItem, selectCounterSecondItem } from 'src/app/modules/counter/ng-rx/counter.state';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'angular-stream';
  value1$: Observable<number>;
  value2$: Observable<number>;

  constructor(private readonly store: Store<IApplicationState>) {
    this.value1$ = store.pipe(map(selectCounterFirstItem));
    this.value2$ = store.pipe(map(selectCounterSecondItem));
  }

  start() {
    this.store.dispatch(start());
  }

  stop() {
    this.store.dispatch(stop());
  }
}
