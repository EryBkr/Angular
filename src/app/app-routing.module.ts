import { NgModule, inject } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  {
    //Login layout'a bağlı değil o yüzden loadchildren kullanmadık dikkat ederseniz
    path: 'login',
    loadChildren: () =>
      import('./components/login/login.module').then(
        (module) => module.LoginModule
      ),
    component: LoginComponent,
  },
  {
    //Adres  çubuğu boş ise layoutModule yüklenecek , artık içerisinde ki routing'ten layout sorumlu
    path: '',
    loadChildren: () =>
      import('./components/layouts/layouts.module').then(
        (module) => module.LayoutsModule
      ),
  },
  {
    // **ibaresi path routing tarafından eşleştirilemiyorsa kullanılıyor
    path: '**',
    loadChildren: () =>
      import('./components/not-found/not-found.module').then(
        (module) => module.NotFoundModule
      ),
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
