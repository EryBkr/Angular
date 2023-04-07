import { Injectable } from '@angular/core';
import { DeleteElementService } from './delete-element.service';

@Injectable({
  providedIn: 'root',
})
export class CreateStyleSheetService {
  constructor(private deleteElement: DeleteElementService) {}

  loadCSS(urls: string[]) {
    this.deleteElement.deleteElement("link")
    urls.forEach((url) => {
      // Create link
      let link = document.createElement('link');
      link.href = url;
      link.rel = 'stylesheet';
      link.type = 'text/html';

      let head = document.getElementsByTagName('head')[0];
      let links = head.getElementsByTagName('link');
      let style = head.getElementsByTagName('style')[0];

      // Check if the same style sheet has been loaded already.
      let isLoaded = false;
      for (var i = 0; i < links.length; i++) {
        var node = links[i];
        if (node.href.indexOf(link.href) > -1) {
          isLoaded = true;
        }
      }
      if (isLoaded) return;
      head.insertBefore(link, style);
    });
  }
}
