import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { NgxSpinnerModule } from 'ngx-spinner';
import { NgxPaginationModule } from 'ngx-pagination';
import { ServiceWorkerModule } from '@angular/service-worker';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //Animations ve Toastr modüllerini ekledim
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      closeButton: true,
    }),
    //SweetAlert için ekledik
    SweetAlert2Module,
    //Spinner için ekledik
    NgxSpinnerModule,
    //Pagination için ekledim
    NgxPaginationModule,
    //Api test için ekledim
    HttpClientModule,
    //PWA paketiyle birlikte otomatik eklendi
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000',
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
