import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { NamePipe } from './pipes/name.pipe';
import { UserListPipe } from './pipes/user-list.pipe';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    NamePipe,
    UserListPipe, //pipe kullanımı için eklendi,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, //Form işlemleri için ekledik
  ],
  providers: [DatePipe], //Angular ın içerisinden gelen DatePipe'ı component.ts te kullanabilmek için ekledim
  bootstrap: [AppComponent],
})
export class AppModule {}
