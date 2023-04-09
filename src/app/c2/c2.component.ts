import { Component } from '@angular/core';
import { ArrayServiceService } from '../services/array-service.service';

@Component({
  selector: 'app-c2',
  templateUrl: './c2.component.html',
  styleUrls: ['./c2.component.scss'],
})
export class C2Component {
  //Servisimize burada da eriştik
  constructor(public arrayService: ArrayServiceService) {}
}
