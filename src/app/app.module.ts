import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { C2Component } from './c2/c2.component';

@NgModule({
  declarations: [
    AppComponent,
    C2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule //Form işlemleri için ekledik
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
