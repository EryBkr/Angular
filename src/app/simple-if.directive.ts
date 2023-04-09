import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

//Structural Directive (Structural Directive aslında başında *ngIf gibi olan directivelere verilen isimdir)
//Örneği c2 componentinde yapacağım
@Directive({
  selector: '[appSimpleIf]',
})
export class SimpleIfDirective {

  @Input() set appSimpleIf(result: boolean) {
    if(result){
      //result doğru ise elementi tekrar oluştur
      this.viewContainer.createEmbeddedView(this._templateRef);
    }
    else{
      //Değilse mevcut element'i temizle (sil)
      this.viewContainer.clear();
    }
  }

  constructor(
    private _templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {}
}
