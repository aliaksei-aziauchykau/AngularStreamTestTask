import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IApplicationState } from 'src/app/modules/common/ng-rx/state/application.state';
import { selectCounterFirstItem, selectCounterSecondItem } from 'src/app/modules/counter/ng-rx/counter.state';

@Component({
  selector: 'app-inner-counter',
  templateUrl: './inner-counter.component.html',
  styleUrls: ['./inner-counter.component.less']
})
export class InnerCounterComponent implements OnInit {
  firstItem$: Observable<number>;
  secondItem$: Observable<number>;

  constructor(private readonly store: Store<IApplicationState>) {
    this.firstItem$ = store.pipe(map(selectCounterFirstItem));
    this.secondItem$ = store.pipe(map(selectCounterSecondItem));
  }

  ngOnInit(): void {
  }

}
