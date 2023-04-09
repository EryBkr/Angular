import { Component } from '@angular/core';

@Component({
  selector: 'app-c2',
  templateUrl: './c2.component.html',
  styleUrls: ['./c2.component.scss'],
})
export class C2Component {
  //NgIF benzeri çalışan bir directive'im var,onu denemek için oluşturdum
  result: boolean = true;
}
