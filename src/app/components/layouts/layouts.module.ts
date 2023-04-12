import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutsComponent } from './layouts.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../about/about.component';

@NgModule({
  declarations: [
    LayoutsComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    //Dikkat ederseniz forChild kullandık forRoot değil
    RouterModule.forChild([
      //app-routin.module.ts te LayoutModule'inin yine path değerini "" olarak belirlemiştik burada için layout'a bağlı diğer componentlerin nasıl yönleneceği ile alakalı aslında
      {
        path: '',
        component: LayoutsComponent,
        children: [
          //Layout module ana route ile ulaştık,path değeri yine boş ise başka bir module de bulunan HomeModule'i yükle dedik aslında
          {
            //localhost:4200/
            path: '',
            loadChildren: () =>
              import('../home/home.module').then((module) => module.HomeModule),
            component: HomeComponent,
          },
          {
            //localhost:4200/about
            path: 'about',
            loadChildren: () =>
              import('../about/about.module').then((module) => module.AboutModule),
            component: AboutComponent,
          },
        ],
      },
    ]),
  ],
})
export class LayoutsModule {}
