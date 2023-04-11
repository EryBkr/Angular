import { createReducer, on } from '@ngrx/store';
import { addUser } from '../actions/users.action';
import { UserModel } from 'src/app/models/user.model';

//Başlangıç değerim
export const initialState: UserModel[] = [];

//Store ile iletişime gidecek reducer'imi tanımlıyorum
export const usersReducer = createReducer(
  //Reducer'a başlangıç değerimi verdim
  initialState,
  //on(action-name,(mevcut state,props=>parametre))
  on(addUser, (state, { user }) => {
    return [...state,user]
  })
);
