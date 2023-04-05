import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { LayoutComponent } from './components/layout/layout.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContantComponent } from './components/contant/contant.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/layout/navbar/navbar.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { SidebarComponent } from './components/layout/sidebar/sidebar.component';
import { NotFoundComponent } from './components/not-found/not-found.component';


@NgModule({
  declarations: [AppComponent, LayoutComponent, HomeComponent, AboutComponent, ContantComponent, LoginComponent, NavbarComponent, FooterComponent, SidebarComponent, NotFoundComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, //ngModule'i kullanabilmek için ekledik
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
