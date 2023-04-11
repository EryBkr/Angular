import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';

//Hataları merkezi olarak alıyorum
@Injectable()
export class ErrorHandlingInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    //pipe http isteklerinin yanıtlarını manipüle etmemizi sağlıyor (aslında observable) böyle rxJs aracılığıyle (catchError metodu) hata varsa yakalıyorum
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        //Hatayı yazdırıyoruz
        console.log('Merkezi hata yakalama çalıştı: ' + error);

        //isteğin devamlılığı için eklemek zorundaydım
        return of();
      })
    );
  }
}
