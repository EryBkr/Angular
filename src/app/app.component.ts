import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  getValue() {
    //JS ile html elementini handle ediyorum
    let element: any = document.getElementById('name');
    //element içerisinde ki value değerini handle ediyorum
    console.log(element.value);
  }

  //event parametresi içerisinde belirlediğimiz element'e ait tüm özellikleri aldık
  getEvent(event: any) {
    console.log(event.target.value);
  }

  //#nickname in ait olduğu elemente direkt bu şekilde bind işlemi kurabiliyoruz
  @ViewChild('nickname') nickName: ElementRef<HTMLInputElement>;
  getNickName() {
    console.log(this.nickName.nativeElement.value);
  }

  name:string="Input ile bind edildiği için direkt içerisine yazacak";
  getNameNgModel(){
    //ngModel aracılığıyla değeri alabiliyoruz
    alert(this.name);
  }
}
