import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { C1Component } from './components/c1/c1.component';
import { C2Component } from './components/c2/c2.component';
import { C3Component } from './components/c3/c3.component';
import { C1Route } from './components/c1/c1.route';
import { NotFoundComponent } from './components/not-found/not-found.component';

//Routing yönetimi için oluşturulan module
const routes: Routes = [
  {
    path: '', //url boş ise C1Componenti yüklensin
    component: C1Component,
  },
  C1Route,//Bu route kendi componenti içerisinde oluşturulmuş ve burada declare edilmiştir
  {
    path: 'c2',
    component: C2Component,
  },
  {
    path: 'c3',
    component: C3Component,
  },
  {//Hiç bir adres patterni uymuyorsa aşağıda tanımladığım bir component'e gidecektir
    path:"**",
    component:NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
