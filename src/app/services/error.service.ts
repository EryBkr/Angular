import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

//Hataları handle etmemde yardımcı olacak servisim
@Injectable({
  providedIn: 'root',
})
export class ErrorService {
  constructor() {}

//Her seferinde bu kodu yazmayalım api isteklerine ekleyelim değil mi?
  errorHandler(err: HttpErrorResponse) {
    if (err.status == 404) {
      console.log();
    }
  }
}
