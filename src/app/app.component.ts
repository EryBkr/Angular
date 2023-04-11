import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor() {
    //Ahanda localstorage bu kadar
    localStorage.setItem('token', 'value');
    var value = localStorage.getItem('token');
    localStorage.removeItem("token");
    localStorage.clear();
  }
}
