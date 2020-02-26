import { NgModule } from '@angular/core';
import { counterReducer } from 'src/app/modules/counter/ng-rx/counter.reducer';
import { OuterCounterComponent } from './components/outer-counter/outer-counter.component';
import { InnerCounterComponent } from './components/inner-counter/inner-counter.component';
import { counterFeatureKey } from 'src/app/modules/counter/ng-rx/counter.state';
import { CounterEffects } from 'src/app/modules/counter/ng-rx/counter.effects';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    OuterCounterComponent,
    InnerCounterComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    StoreModule.forFeature(counterFeatureKey, counterReducer),
    EffectsModule.forFeature([CounterEffects])
  ],
  exports: [
    OuterCounterComponent
  ]
})
export class CounterModule { }
