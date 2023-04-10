import { NgModule, inject } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReverseAppComponent } from './components/reverse-app/reverse-app.component';
import { AppComponent } from './app.component';

//Routing'imi de oluşturdum
const routes: Routes = [
  // { path: 'reverse', component: ReverseAppComponent },
  // { path: '', component: AppComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
