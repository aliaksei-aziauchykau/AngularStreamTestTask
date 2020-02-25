import { createAction } from '@ngrx/store';

export const increase = createAction('[Counter Component] Increase');
export const decrease = createAction('[Counter Component] Decreaase');
export const change = createAction('[Counter Component] Change');
export const stop = createAction('[Counter Component] Stop');
export const start = createAction('[Counter Component] Start');
