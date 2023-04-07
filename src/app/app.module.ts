import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './components/adminLTE/navbar/navbar.component';
import { LayoutComponent } from './components/adminLTE/layout/layout.component';
import { LayoutComponent as DashboardLayout } from './components/material-dashboard/layout/layout.component';
import { LayoutComponent as MaterialKitLayout } from './components/materialKit/layout/layout.component';
import { AsideComponent } from './components/adminLTE/aside/aside.component';
import { FooterComponent } from './components/adminLTE/footer/footer.component';
import { LeftAsideComponent } from './components/adminLTE/left-aside/left-aside.component';
import { BlankComponent } from './components/adminLTE/blank/blank.component';
import { LoginComponent } from './components/adminLTE/login/login.component';
import { ProfileComponent } from './components/adminLTE/profile/profile.component';
import { HomeComponent } from './components/material-dashboard/home/home.component';
import { SidenavComponent } from './components/material-dashboard/sidenav/sidenav.component';
import { HeaderComponent } from './components/materialKit/header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LayoutComponent,
    AsideComponent,
    FooterComponent,
    LeftAsideComponent,
    BlankComponent,
    LoginComponent,
    ProfileComponent,
    DashboardLayout,
    HomeComponent,
    SidenavComponent,
    MaterialKitLayout,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, //ngModule'i kullanabilmek için ekledik
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
