import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContantComponent } from './components/contant/contant.component';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

//Layout altında ki children tanımlamalarıyla birlikte artık layout içerisinde açıklarak componentleri belirliyorum
const routes: Routes = [
  //Login'i en yukarıda tanımlama nedenimiz routing file yukarıdan aşağıya okunduğu içindir. normalde localhost:4200/login dediğimiz zaman gidebileceğimiz bir component olmasına rağmen
  //notfound component yukarı olduğu için sanki login yokmuş gibi davranıyor, ve logini açması gerekirsen notfound component yükleniyor
  {
    //Login standart layout ile açılmasın diye onu child kısmından ayırdım
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'about',
        component: AboutComponent,
      },
      {
        path: 'contact',
        component: ContantComponent,
      },
      { //Hiç eşleşme yok ise notfound çalışsın
        path: '**',
        component: NotFoundComponent,
      },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
