import { Directive, ElementRef, HostListener, Input } from '@angular/core';

//Directive decarator tanımlaması
//Attribute Directive
@Directive({
  selector: '[appColorize]',
})
export class ColorizeDirective {
  //Şayet directive'e kullanıldığı yerde bir değer ataması yapılacaksa aşağıda ki şekilde handle edebiliyorum
  //selector ile aynı isimde olmalı
  @Input() appColorize: string = '';

  //Başka bir isimdeki değişkene değer atamak istersek
  @Input() test: string = '';

  constructor(private _element: ElementRef) {
    //Direktif'in kullanıldığı html elementini handle ediyorum
    //this._element.nativeElement.style.backgroundColor="Yellow";
    //class name ataması yapıyorum
    //this._element.nativeElement.className="form-control";
  }

  //Event yakalayabilmemizi sağlıyor
  @HostListener('mouseenter') mouseEnter() {
    //Mouse elementin üzerine geldiğinde arka plan rengini kırmızı yapacak
    this._element.nativeElement.style.backgroundColor = this.test;
  }

  //Event yakalayabilmemizi sağlıyor
  @HostListener('mouseleave') mouseLeave() {
    //Mouse elementin üzerinden ayrıldığı zaman arka plan rengini sarı yapacak
    this._element.nativeElement.style.backgroundColor = this.appColorize;
  }
}
