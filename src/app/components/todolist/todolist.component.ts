import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss'],
})
export class TodolistComponent {
  //Üst komponentten gelecek
  @Input() todos: string[] = [];
}
