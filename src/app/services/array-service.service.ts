import { Injectable } from '@angular/core';

//DI ile inject edebileceğimiz servisimiz
@Injectable({
  providedIn: 'root'
})
export class ArrayServiceService {

  name: string = '';
  names: string[] = [];

  constructor() { }

  save() {
    this.names.push(this.name);
    this.name = '';
  }
}
