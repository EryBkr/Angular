import { Component } from '@angular/core';

@Component({
  selector: 'app-reverse-app',
  templateUrl: './reverse-app.component.html',
  styleUrls: ['./reverse-app.component.scss'],
})
export class ReverseAppComponent {
  //Todos alt komponentten dolacak
  todos: string[] = [];

  //Child componentten tetiklenen addWork ile listeye ekleme işlemini yapıyorum
  addWork(event: string) {
    this.todos.push(event);
  }
}
