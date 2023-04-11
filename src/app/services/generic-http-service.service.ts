import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ErrorService } from './error.service';

@Injectable({
  providedIn: 'root',
})
export class GenericHttpServiceService {
  //HTTP isteği için di ile ekledim
  //ErrorService hataları handle etmekte işimi kolaylaştıracak aslında
  constructor(
    private _httpClient: HttpClient,
    private _errorHelper: ErrorService
  ) {}

  baseApiUrl: string = 'https://jsonplaceholder.typicode.com';

  //GET
  //callback parametresinin amacı component içerisinde subscribe olmadan gerekli değeri yakalamak,nasıl istersek artık"
  //api base url e eklenecek adresi barındıracak aslında
  get(api: string, callback: (res: any) => void) {
    //İsteklerim için kullanacağım options
    let headers = {
      headers: {
        authorization: 'token',
      },
    };

    this._httpClient.get(this.baseApiUrl + api, headers).subscribe({
      next: (res: any) => {
        callback(res);
      },
      error: (err: HttpErrorResponse) => {
        //Hataları kendime özel metotlarla handle etmek için servis oluşturdum
        this._errorHelper.errorHandler(err);
      },
      complete: () => {
        //try-catch teki finally gibi çalışır
      },
    });
  }

  post() {}
}
