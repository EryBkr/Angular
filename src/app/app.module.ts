import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { UserComponent } from './components/user/user.component';
import { usersReducer } from './state-management/reducers/users.reducer';

@NgModule({
  declarations: [AppComponent, UserComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, //Form işlemleri için ekledik
    //Global state (istediğimiz ismi verdik) ve usersReducers eşleşmesini yaptık
    StoreModule.forRoot({ users: usersReducer }), //NgRx için ekledim
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
