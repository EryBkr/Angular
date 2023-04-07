import { Injectable, Renderer2, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { DeleteElementService } from './delete-element.service';

@Injectable({
  providedIn: 'root',
})
export class CreateScriptService {
  renderer: Renderer2;

  constructor(
    @Inject(DOCUMENT) private _document: Document,
    private deleteElement: DeleteElementService
  ) {}

  createScript(path: string[]) {
    this.deleteElement.deleteElement("script");
    path.forEach((element) => {
      const s = this.renderer.createElement('script');
      s.type = 'text/javascript';
      // the path to your script inside the assets folder '../assets/yourcode.js'
      s.src = element;
      s.text = ``;
      this.renderer.appendChild(this._document.body, s);
    });
  }
}
