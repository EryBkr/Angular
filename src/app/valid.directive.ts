import { Directive, ElementRef, HostListener, Input } from '@angular/core';

//C1 componentimiz de ki form validation işlemi için oluşturduğum bir directive
@Directive({
  selector: '[appValid]',
})
export class ValidDirective {
  //Input'un valid olup olmadığı bilgisini alıyorum
  @Input() appValid: boolean = false;

  constructor(private _element: ElementRef) {}

  //input'a değer yazılmaya başlandıysa,valid olup olmadığına göre class veriyoruz
  @HostListener('keyup') keyup() {
    if (this.appValid) {
      this._element.nativeElement.className = 'form-control is-valid';
    } else {
      this._element.nativeElement.className = 'form-control is-invalid';
    }
  }
}
