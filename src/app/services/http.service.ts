import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ErrorService } from './error.service';

//HTTP isteklerini üstlenecek servisimiz
@Injectable({
  providedIn: 'root',
})
export class HttpService {
  //HTTP isteği için di ile ekledim
  //ErrorService hataları handle etmekte işimi kolaylaştıracak aslında
  constructor(
    private _httpClient: HttpClient,
    private _errorHelper: ErrorService
  ) {}

  //GET
  //callback parametresinin amacı component içerisinde subscribe olmadan gerekli değeri yakalamak,nasıl istersek artık"
  get(callback: (res: any) => void) {
    //İsteklerim için kullanacağım options
    let headers = {
      headers: {
        authorization: 'token',
      },
    };

    this._httpClient
      .get('https://jsonplaceholder.typicode.com/todos', headers)
      .subscribe({
        next: (res: any) => {
          callback(res);
        },
        error: (err: HttpErrorResponse) => {
          //Hataları kendime özel metotlarla handle etmek için servis oluşturdum
          this._errorHelper.errorHandler(err);
        },
        complete: () => {},
      });
  }

  //POST
  post(model: any, callback: (res: any) => void) {
    this._httpClient
      .post('https://jsonplaceholder.typicode.com/todos/posts', model)
      .subscribe({
        next: (res: any) => {
          callback(res);
        },
        error: (err: HttpErrorResponse) => {
          //Hataları kendime özel metotlarla handle etmek için servis oluşturdum
          this._errorHelper.errorHandler(err);
        },
        complete: () => {},
      });
  }
}
