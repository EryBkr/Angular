import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

//Angular'ın yeni versiyonunda Guard işlemlerini de servislerle çözmemizi istiyorlar
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  //Yönlendirmeyi kontrol edebilmek için Router'ı ekledim
  constructor(private _router: Router) {}
  checkIsAuth() {
    //Local storage de token değeri yoksa false dön, var ise true dön
    if (localStorage.getItem('token')) return true;

    //Token yok ise zorla login'e gönderiyorum
    this._router.navigateByUrl('/login');
    return false;
  }
}
