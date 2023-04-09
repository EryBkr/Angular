import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  //inputtan gelen değeri handle edecek
  work: string = '';

  //will update work
  updatedWork: string = '';

  //Güncelle Formu mu açılacak yoksa ekleme formu mu
  isActiveUpdateForm: boolean = false;

  //Güncellenecek datanın index'i
  updatedIndex: number = NaN;

  //işleri ram de kaydedecek
  works: string[] = [];

  //button'un tetikleyeceği func
  save() {
    this.works.push(this.work);
    //work değişkenini string empty'e çeviriyorum ki butona basıldıktan sonra input'un içerisi temizlensin
    this.work = '';
  }

  //sil butonuna basıldığında index'i alıp array den uçuruyoruz
  remove(index: number) {
    //confirm tarayıcı tarafından gelen hazır kutucuk modal'ını çalıştırır
    let result: boolean = confirm('Kaydı Silmek İstediğinize emin misiniz?');

    //Kişi onaylamışsa siliyoruz
    if (result) {
      //index'i gelen kaydı sil
      this.works.splice(index, 1);
    }
  }

  //Burada index değeri ve güncellenmiş işin tanımıyla birlikte array de gerekli yeri değiştiriyorum
  //Ardından güncelleme işlemini bitiriyorum
  update() {
    this.works[this.updatedIndex] = this.updatedWork;
    this.cancelUpdateAction();
  }

  //Güncelleme formunun görüntülenmesi için değişkene true set ediyoruz ve güncellenecek datayı handle ediyoruz
  //index'i de array da ki datayı güncelleyebilmek için aldık
  viewUpdateForm(willUpdatedwork: string, index: number) {
    this.updatedIndex = index;
    this.updatedWork = willUpdatedwork;
    this.isActiveUpdateForm = true;
  }

  //Güncelleme işlemi iptal edilsin
  cancelUpdateAction() {
    this.isActiveUpdateForm = false;
  }

  //Input karakterimize göre class ataması yapıyoruz ki daha şekil gözüksün
  changeInputClassForValidation() {
    if (this.work.length < 3) return 'is-invalid';
    return 'is-valid';
  }
}
