import { NgModule, inject } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { C1Component } from './components/c1/c1.component';
import { C2Component } from './components/c2/c2.component';
import { C3Component } from './components/c3/c3.component';

//Routing'imi de oluşturdum
const routes: Routes = [
  { path: '', component: C1Component },
  { path: 'c2', component: C2Component },
  { path: 'c3', component: C3Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
