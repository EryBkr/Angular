import { Component } from '@angular/core';
import { HomeDeactiveService } from 'src/app/services/home-deactive.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor(public _deactiveService:HomeDeactiveService){}
}
