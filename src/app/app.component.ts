import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // template: '<h1>HTML olmadan da çalışırım</h1>',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  //styles:["body{background-color:red;}"] şeklinde de inline çalışabiliriz ama ne gerek var ;)
})
export class AppComponent {
  title = 'my-app';

  //Bu şekilde çoklu değer verebiliyoruz
  name: string | number = 'eray';

  //Bu şekilde çoklu değer verebiliyoruz ve undefined olarak tanımladığımız için ilk değer ataması yapmadığımız halde sorun olmadı
  test: string | undefined;

  exampleMetot() {
    alert('Work');
  }
}
