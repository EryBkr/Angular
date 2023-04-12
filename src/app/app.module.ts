import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { NgFormComponent } from './components/ng-form/ng-form.component';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [AppComponent, ReactiveFormComponent, NgFormComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,//Reactive Form'ları kullanabilmek için ekledik
    FormsModule, //Form işlemleri için ekledik (Ng-Form)
    HttpClientModule, //HTTP istekleri için ekledim
  ],
  providers: [DatePipe], //Form işlemlerinde tarihi düzenleyebilmek için ekledik
  bootstrap: [AppComponent],
})
export class AppModule {}
