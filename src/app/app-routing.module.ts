import { NgModule, inject } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { AuthService } from './services/auth.service';
import { LayoutComponent } from './components/layout/layout.component';
import { AdminComponent } from './components/layout/admin/admin.component';
import { EditorComponent } from './components/layout/editor/editor.component';
import { DeactiveExampleGuard } from './deactive-example.guard';
import { HomeDeactiveService } from './services/home-deactive.service';

//Routing'imi de oluşturdum
const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [() => inject(AuthService).checkIsAuth()], //Yeni versiyonda Guard işlemlerimizi servislerle çözmemizi istiyorlar
    //canDeactivate:[DeactiveExampleGuard] //Home'dan ayılırken yapmam gereken bir şey var ise DeactiveGuard kullanılır
    canDeactivate:[()=>inject(HomeDeactiveService).checkEditStatus()] //Angular Service Based kullanmamızı önerdiği için bu şekilde yaptık
  }, //Guard sayesinde eğer token mevcut değilse Home'a gidemiyorum,
  {
    path: 'layout',
    component: LayoutComponent,
    //Bu arkadaş eğer bir layout'un altında ki bütün componentlerin Guard işlemine tutulmasını istiyorsak kullanılır,her birine tek tek guard vermek saçma değil mi?
    canActivateChild: [() => inject(AuthService).checkIsAuth()],
    children: [
      {
        path: 'admin',
        component: AdminComponent,
      },
      {
        path: 'editor',
        component: EditorComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
