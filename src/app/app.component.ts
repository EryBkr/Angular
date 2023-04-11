import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private _httpClient: HttpClient) {}

  getApi() {
    this._httpClient
      .get('https://jsonplaceholder.typicode.com/todos')
      .subscribe((response) => {
        console.log('API isteği başarılı');
        console.table(response);
      });
  }
}
