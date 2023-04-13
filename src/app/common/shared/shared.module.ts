import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//Bu module'nin amacı stand alone yapısında bir module'yi bir den fazla componente sürekli eklemeyeyim,ortak olanları gruplayayım
@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule],
  exports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule], //Export diyerek eklediğim module'leri dışarıda da kullanabilirim
})
export class SharedModule {}
