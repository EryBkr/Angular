import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

///YENİ VERSİYONDA BU İŞLEMLERİ SERVİSLERLE YAPMAMIZI İSTİYORLAR
//CanActivate Guard'lar bir component ten başka bir componente geçişi kontrol etmek için kullanılır
@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  //Yönlendirmeyi kontrol edebilmek için Router'ı ekledim
  constructor(private _router: Router) {}


  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    //Local storage de token değeri yoksa false dön, var ise true dön
    if (localStorage.getItem('token')) return true;

    //Token yok ise zorla login'e gönderiyorum
    this._router.navigateByUrl("/login");
    return false;
  }
}
