import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  name: string = 'Eray';

  //Bu arkadaş c1 komponentindeki changeNameEvent'e bağlandı, event aracılığıyla gerekli datayı alıyoruz
  changeName(event: string) {
    this.name = event;
  }
}
