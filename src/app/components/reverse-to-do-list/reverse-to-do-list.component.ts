import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-reverse-to-do-list',
  templateUrl: './reverse-to-do-list.component.html',
  styleUrls: ['./reverse-to-do-list.component.scss'],
})
export class ReverseToDoListComponent {
  todo: string = '';

  //sentParent aracılığıyla üst komponente data göndereceğiz
  @Output() sentParent = new EventEmitter<string>();

  //Parent componente data gönderiyoruz
  sentParentComponent() {
    //Inputtan aldığımız todo değerini üst komponente gönderiyorum
    this.sentParent.emit(this.todo);
  }
}
