import { Component, ElementRef, ViewChild } from '@angular/core';

//app.components için html sayfasına bile gerek duymadım, sadece router-outlet bizim için yeterlidir
@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet>`
})
export class AppComponent {

}
