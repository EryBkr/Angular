import { NgModule, inject } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Routing'imi de oluşturdum
//Her bir component farklı module'de barınıyor,onları bu şekilde çağırabiliyoruz,bu sayede sayfa ilk açılığı zaman kullanılmayan component'ler yüklenmemiş oluyor
const routes: Routes = [
  {
    path: 'c1',
    loadChildren: () =>
      import('./components/c1/c1.module').then((module) => module.C1Module),
  },
  {
    path: 'c2',
    loadChildren: () =>
      import('./components/c2/c2.module').then((module) => module.C2Module),
  },
  {
    path: 'c3',
    loadChildren: () =>
      import('./components/c3/c3.module').then((module) => module.C3Module),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
