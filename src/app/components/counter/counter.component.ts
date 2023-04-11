import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { decrement, increment, reset } from 'src/app/actions/counter.action';

//State'ime etki edecek component'i ayırdım
@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
})
export class CounterComponent {
  //count ifadesinin module içerisinde ki değişken ismiyle aynı olması önemli
  constructor(private _store: Store<{ count: number }>) {}

  //Metotlarda gerekli actionlara ulaşıyorum,actionlar reducer'lara giderek gerekli işlemleri gerçekleştirecekler
  arttir() {
    this._store.dispatch(increment());
  }

  azalt() {
    this._store.dispatch(decrement());
  }

  resetle() {
    this._store.dispatch(reset());
  }
}
