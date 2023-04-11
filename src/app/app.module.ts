import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { ErrorHandlingInterceptor } from './interceptors/error-handling.interceptor';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, //Form işlemleri için ekledik
    HttpClientModule, //HTTP istekleri için ekledim
  ],
  //Interceptor'u projeme ekledim
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi:true //Birden fazla interceptor kullanılabilir mi
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorHandlingInterceptor,
      multi:true //Birden fazla interceptor kullanılabilir mi
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
