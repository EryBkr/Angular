import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-c1',
  templateUrl: './c1.component.html',
  styleUrls: ['./c1.component.scss'],
})
export class C1Component {
  //Üst komponentten gelen verileri input ile karşılıyoruz
  @Input() name: string = '';

  //Üst komponente data gönderirken kullanıyoruz,aslında event fırlatmamız gerekiyor
  @Output() changeNameEvent = new EventEmitter<string>();

  //Buttona basıldığında emit ile birlikte üst komponentteki data değişecektir
  changeName() {
    this.changeNameEvent.emit(this.name);
  }
}
