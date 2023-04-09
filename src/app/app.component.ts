import { Component } from '@angular/core';
import { ArrayServiceService } from './services/array-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  //Servisi HTML tarafında da kullanmak istersem public olarak tanımlıyorum
  constructor(public arrayService: ArrayServiceService) {}
}
