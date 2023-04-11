import { createAction } from '@ngrx/store';

//Actionlar aracılığıyla Reducer'lara gidiyoruz,Reducer'larda state'i Store'a kaydediyor.
//CreateAction içerisine Unique bir isim veriyoruz
//Alttaki köşeli parantez best pracites işte
export const increment = createAction('[Counter Component] increment');
export const decrement = createAction('[Counter Component] decrement');

//Reset içinde bir action oluşturduk
export const reset=createAction("[Counter Component] reset")
