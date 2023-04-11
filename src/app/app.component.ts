import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { addUser } from './state-management/actions/users.action';
import { UserModel } from './models/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  //Modelimi Create ediyorum
  user: UserModel = new UserModel();

  //Store'a erişiyorum ve onun aracılığıyla users Stateini handle ediyorum
  constructor(private _store: Store<{ users: UserModel[] }>) {}

  add() {
    //Action benden parametre bekliyordu onu da gönderdim,action reducer'i tetikleyecek , reducer'de Store da gerekli işlemleri yapacak aslında
    //State'te barınan users listesine değer eklemiş oldum
    this._store.dispatch(addUser({ user: this.user }));
    this.user = new UserModel();
  }
}
