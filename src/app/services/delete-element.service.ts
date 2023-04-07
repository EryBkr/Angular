import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DeleteElementService {
  constructor() {}

  deleteElement(tagName: string) {
    let elements = document.getElementsByTagName(tagName);

      for (var i = elements.length -1; i >= 0; i--) {
        elements[i].remove();
      }
  }
}
