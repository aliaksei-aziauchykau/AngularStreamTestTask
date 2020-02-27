import { CounterActions } from 'src/app/modules/counter/ng-rx/counter.actions';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { CounterSelector } from 'src/app/modules/counter/ng-rx/counter.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'angular-stream';
  firstItem$: Observable<number>;
  secondItem$: Observable<number>;

  constructor(
    private readonly counterSelector: CounterSelector,
    private readonly counterActions: CounterActions) {

    this.firstItem$ = this.counterSelector.getFirstItem();
    this.secondItem$ = this.counterSelector.getSecondItem();
  }

  start() {
    this.counterActions.startCounters();
  }

  stop() {
    this.counterActions.stopCounters();
  }

  reset() {
    this.counterActions.resetCounterState();
  }
}
