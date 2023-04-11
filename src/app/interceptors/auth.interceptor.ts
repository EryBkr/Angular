import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

//HTTP isteklerinin arasına girmemizi sağlıyor aslında
@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    //HTTP isteğinin arasına girip token ekledik
    let newRequest=request.clone({
      headers:request.headers.set("Authentication","Bearer JWT_TOKEN")
    });
    return next.handle(request);
  }
}
