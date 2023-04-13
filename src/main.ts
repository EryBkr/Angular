import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { importProvidersFrom } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { AppComponent } from './app/app.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

//Projenin tamamı standAlone mantıkta çalışacak ondan dolayı app.module bağımlılığınıda kaldırdım
bootstrapApplication(AppComponent, {
  providers: [
    //HttpClient ekledik ama bu arkadaş bünyesinde daha fazla Option barındırabiliyor tek farkı o aslında
    provideHttpClient(),
    importProvidersFrom(
      CommonModule,
      RouterModule.forRoot([
        {
          path: 'login',
          //dikkat ederseniz loadComponent dedik ;)
          loadComponent: () =>
            import('./app/components/login/login.component').then(
              (component) => component.LoginComponent
            ),
        },
        {
          path: '',
          loadComponent: () =>
            import('./app/components/layout/layout.component').then(
              (component) => component.LayoutComponent
            ),
            //maalesef children'ları sadece burada verebiliyorum
          children: [
            {
              path: '',
              loadComponent: () =>
                import('./app/components/home/home.component').then(
                  (c) => c.HomeComponent
                ),
            },
            {
              path: 'about',
              loadComponent: () =>
                import('./app/components/about/about.component').then(
                  (c) => c.AboutComponent
                ),
            },
          ],
        },
        {
          //Routing te hiçbir eşleşme yok ise
          path: '**',
          loadComponent: () =>
            import('./app/components/not-found/not-found.component').then(
              (component) => component.NotFoundComponent
            ),
        },
      ]),
      BrowserModule
    ),
  ],
});
