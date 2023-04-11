import { Component } from '@angular/core';
import { HttpService } from './services/http.service';
import { GenericHttpServiceService } from './services/generic-http-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  //Servisimiz aracılığıyla HTTP isteklerini yöneteceğim
  constructor(
    private _httpService: HttpService,
    private _genericHttpService: GenericHttpServiceService
  ) {}

  model: any;

  //Temelde bu şekilde kullanıyoruz
  //callback fonksiyonu aracılığıyla bu şekilde de yakalayabiliriz ya da içeride subscribe olabiliriz bize nasıl uyarsa
  get() {
    this._httpService.get((res) => {
      console.log(res);
    });
  }

  //Temelde bu şekilde kullanıyoruz
  //callback fonksiyonu aracılığıyla bu şekilde de yakalayabiliriz ya da içeride subscribe olabiliriz bize nasıl uyarsa
  genericGet() {
    this._genericHttpService.get('controller/action', (res) => {
      console.log(res);
    });
  }

  //callback fonksiyonu aracılığıyla bu şekilde de yakalayabiliriz ya da içeride subscribe olabiliriz bize nasıl uyarsa
  add() {
    this._httpService.post(this.model, (res) => {
      console.log(res);
    });
  }
}
