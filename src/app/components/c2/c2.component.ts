import { Component } from '@angular/core';

@Component({
  selector: 'app-c2',
  templateUrl: './c2.component.html',
  styleUrls: ['./c2.component.scss']
})
export class C2Component {
  list = [{ id: 2, name: 'Berkay', surname: 'Bakır', age: '22' }];
}
