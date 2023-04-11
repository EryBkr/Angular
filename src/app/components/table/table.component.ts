import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent {
  //Generic componentimiz
  //Input prefixi ile dışarıdan beslenebileceğini belirtiyoruz
  @Input() heads: string[] = ['#', 'Alan 1', 'Alan 2'];
}
