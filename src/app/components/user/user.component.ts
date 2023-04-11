import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { UserModel } from 'src/app/models/user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent {
  users: UserModel[] = [];

  //State içerisinde ki users'a ulaştık,bu arkadaş app.module.ts içerisinde belirttiğimiz users aslında
  constructor(private _store: Store<{ users: UserModel[] }>) {
    //state içerisinde ki users'ı handle ettim
    this._store.select('users').subscribe((response) => {
      this.users = response;
    });
  }
}
