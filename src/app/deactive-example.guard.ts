import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanDeactivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { HomeComponent } from './components/home/home.component';

//Bu yapıyı service based yaptık
@Injectable({
  providedIn: 'root',
})
export class DeactiveExampleGuard implements CanDeactivate<unknown> {
  canDeactivate(
    component: HomeComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState: RouterStateSnapshot
  ) {
    //HomeComponent'ten başka bir component'e geçmek istediğimizde çalışacaktır
    //let result = confirm('Sayfadan çıkmak istediğinize emin misiniz');
    //return false ise sayfadan çıkmayacaktır
    //return result;

    //YA DA COMPONENT İÇERİSİNDE Kİ METODU DA KULLANABİLİRİM
    //return component.checkEditStatus();

    return true;
  }
}
