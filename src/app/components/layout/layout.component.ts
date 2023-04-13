import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/common/shared/shared.module';

@Component({
  selector: 'app-layout',
  standalone: true,
  //Her bir componentimiz standalone çalışacak ondan kaynaklı layout içerisinde kullanacağım arkadaşları burada tanımladım
  //Shared Module içerisinde ortak olarak kullancağım module'ler var bu bir best practices'tir
  imports: [NavbarComponent, FooterComponent, SidebarComponent, SharedModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent {}
