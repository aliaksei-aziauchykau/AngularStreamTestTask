import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-outer-counter',
  templateUrl: './outer-counter.component.html',
  styleUrls: ['./outer-counter.component.less']
})
export class OuterCounterComponent implements OnInit {
  
  @Input() value: number;

  constructor() { }

  ngOnInit(): void {
  }

}
