import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private _date: DatePipe) {}

  //#region Custom Pipe
  search: string = '';

  names: string[] = ['Ronaldo', 'Messi', 'Sabri'];

  userList: { name: string; age: number }[] = [
    { name: 'Test', age: 5 },
    { name: 'Test 1', age: 6 },
    { name: 'Test 3', age: 15 },
  ];
  //#endregion

  //#region Date Pipe
  //Tarihi aldık
  dateString: Date = new Date();
  //date input ta bu arkadaşı gösteremiyorum,gösterebilmek için
  //input'un istediği formata çevirebilmek için DatePipe'ı kullandım
  testDateString = this._date.transform(new Date(), 'yyyy-MM-dd');
  //#endregion

  //#region  Currency Pipe
  money: number = 0;
  //#endregion

  //#region Lower Case,Upper Case,TitleCase Pipe
  title: string = '';
  //#endregion
}
