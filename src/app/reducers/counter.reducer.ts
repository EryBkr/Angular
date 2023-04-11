import { createReducer, on } from '@ngrx/store';
import { decrement, increment, reset } from '../actions/counter.action';

//Başlangıç değerini veriyorum
export const initialState: number = 0;

export const counterReducer = createReducer(
  //Başlangıç değerimi verdim
  initialState,
  //Actionlarımı verdim ve state'e manipüle edip geri döndüm
  on(increment, (state) => state + 1),
  on(decrement, (state) => state - 1),
  on(reset, (state) => 0)
);
