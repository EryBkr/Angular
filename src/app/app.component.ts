import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  //Store da tanımladığım count değişkenini simgeliyor
  count$: Observable<number>;

  //count ifadesinin module içerisinde ki değişken ismiyle aynı olması önemli
  constructor(private _store: Store<{ count: number }>) {
    //Store daki değeri count'a aktarıyorum,state erişimi...
    this.count$ = _store.select('count');
  }
}
