import { Component } from '@angular/core';

@Component({
  selector: 'app-c1',
  templateUrl: './c1.component.html',
  styleUrls: ['./c1.component.scss'],
})
export class C1Component {
  //Table componentimize göndereceğiz
  heads: string[] = ['Coloumn 1', 'Coloumn 2', 'Coloumn 3', 'Coloumn 4'];

  list = [{ id: 1, name: 'Eray', surname: 'Bakır', age: '29' }];
}
