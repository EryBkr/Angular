import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { Router } from '@angular/router';

@Directive({
  selector: '[appMyRouterDirective]',
})
export class MyRouterDirectiveDirective {
  @Input() appMyRouterDirective: string = '';

  //Generic olarak html'i özelleştirebiliyorum
  //Routing işlemi için router'u da dahil ettim
  constructor(
    private _element: ElementRef<HTMLLinkElement>,
    private _router: Router
  ) {}

  //Elementimize tıklanıldığı zaman
  //Amacımız routerLink'in yaptığı işi yapmak
  @HostListener('click') click() {
    //UI tarafından aldığımız değere göre bizleri yönlendirecek
    this._router.navigateByUrl(this.appMyRouterDirective);
  }
}
