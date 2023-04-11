import { createAction, props } from '@ngrx/store';
import { UserModel } from 'src/app/models/user.model';

//Action'a unique key atadım ve çalışacağım parametreyi type ile birlikte belirliyorum
export const addUser = createAction(
  '[User Component] Add User',
  props<{ user: UserModel }>()
);
