import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  //Bu iki arkadaş form elementlerine bind edildi (Two way binding)
  creaditCost: number = 10000;
  installmentCost: number = 1;
  installmentPerMounth: number = 0;

  creditCalculator() {
    this.installmentPerMounth = this.creaditCost / this.installmentCost;
  }
}
