import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { AutoComponent } from './auto/auto.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,//Manuel olarak component oluşturduğumuz zaman declarations işlemini de unutmamamız gerekir,yoksa component'i herhangi bir yerde kullanamayız
    AutoComponent //CLI ile eklediğimiz zaman zaten otomatik olarak buraya eklenecektir
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
