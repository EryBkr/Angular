import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './components/adminLTE/layout/layout.component';
import { LayoutComponent as MaterialLayout } from './components/material-dashboard/layout/layout.component';
import { LayoutComponent as MaterialKitLayout } from './components/materialKit/layout/layout.component';
import { BlankComponent } from './components/adminLTE/blank/blank.component';
import { LoginComponent } from './components/adminLTE/login/login.component';
import { HomeComponent } from './components/material-dashboard/home/home.component';
import { ProfileComponent } from './components/adminLTE/profile/profile.component';

//Spesifik route'lar yukarıda olmalı
const routes: Routes = [
  {

    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'materialkit',
    component: MaterialKitLayout
  },
  {
    path: 'dashboard',
    component: MaterialLayout,
    children: [
      {
        path: '',
        component: HomeComponent,
      },
    ],
  },
  {
    path: 'admin-lte',
    component: LayoutComponent,
    children: [
      {
        path: 'profiles',
        component: ProfileComponent,
      },
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: '',
        component: BlankComponent,
      }
    ],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
