import { NgModule, inject } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Routing'imi de oluşturdum
const routes: Routes = [

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
