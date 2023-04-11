import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './reducers/counter.reducer';
import { CounterComponent } from './components/counter/counter.component';

@NgModule({
  declarations: [AppComponent, CounterComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, //Form işlemleri için ekledik
    //count isimli değişkene reducer'ı veriyorum
    //ikinci bir reducer'ım varsa eğer { count: counterReducer, count2: counterReducer2 } şeklinde verebilirim
    StoreModule.forRoot({ count: counterReducer }), //NgRx için ekledik
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
