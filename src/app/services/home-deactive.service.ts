import { Injectable } from '@angular/core';

//DeactiveGuard yerine kullanacağım Servisim. Angular artık bu yöntemi öneriyor
@Injectable({
  providedIn: 'root'
})
export class HomeDeactiveService {

  constructor() { }

  edit: boolean = false;

  checkEditStatus() {
    if (this.edit) {
      let result = confirm(
        'Güncelleme sayfası açıkken çıkmak istediğinize emin misiniz?'
      );
      return result;
    }
    return true;
  }
}
