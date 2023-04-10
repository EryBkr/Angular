import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { TodolistComponent } from './components/todolist/todolist.component';
import { ReverseToDoListComponent } from './components/reverse-to-do-list/reverse-to-do-list.component';
import { ReverseAppComponent } from './components/reverse-app/reverse-app.component';

@NgModule({
  declarations: [
    AppComponent,
    TodolistComponent,
    ReverseToDoListComponent,
    ReverseAppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, //Form işlemleri için ekledik
  ],
  providers: [],
  bootstrap: [ReverseAppComponent],
})
export class AppModule {}
