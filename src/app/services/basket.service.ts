import { Injectable } from '@angular/core';

//Basket işleri için oluşturduğum servis
@Injectable({
  providedIn: 'root'
})
export class BasketService {
  basketsCount: number = 0;

  addBasket() {
    this.basketsCount++;
  }
}
