import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ColorizeDirective } from './colorize.directive';
import { MyRouterDirectiveDirective } from './my-router-directive.directive';
import { C1Component } from './c1/c1.component';
import { C2Component } from './c2/c2.component';
import { ValidDirective } from './valid.directive';
import { SimpleIfDirective } from './simple-if.directive';

@NgModule({
  declarations: [
    AppComponent,
    ColorizeDirective,
    MyRouterDirectiveDirective,
    C1Component,
    C2Component,
    ValidDirective,
    SimpleIfDirective//Direktif'in kullanılabilmesi için ekledim
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
