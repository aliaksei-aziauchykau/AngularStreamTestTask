import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CounterSelector } from 'src/app/modules/counter/ng-rx/counter.selectors';

@Component({
  selector: 'app-inner-counter',
  templateUrl: './inner-counter.component.html',
  styleUrls: ['./inner-counter.component.less']
})
export class InnerCounterComponent implements OnInit {
  firstItem$: Observable<number>;
  secondItem$: Observable<number>;

  constructor(private readonly counterSelector: CounterSelector) {
    this.firstItem$ = this.counterSelector.getFirstItem();
    this.secondItem$ = this.counterSelector.getSecondItem();
  }

  ngOnInit(): void {
  }

}
