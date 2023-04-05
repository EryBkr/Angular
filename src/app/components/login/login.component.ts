import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  //Routing yönetimini ts file içerisinden de yapabiliriz (sadece routerLink ile yapılacak diye bir kaide yok)
  constructor(private _router: Router) {}

  login() {
    //this._router.navigate([""])
    //Anasayfaya git
    this._router.navigateByUrl('/');
  }
}
