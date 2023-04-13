import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'my-app';

  //Pagination Test için collection oluşturdum
  collectionForPagination: any[] = [];
  page: number = 1;

  //Apiden gelen kaynakları array'a atıyorum
  listApi: any[] = [];

  constructor(
    private _toastr: ToastrService,
    private _spinner: NgxSpinnerService,
    private _httpClient: HttpClient
  ) {
    //Pagination test amaçlı collection'ımı dolduruyorum
    for (let index = 0; index < 1000; index++) {
      this.collectionForPagination.push(index);
    }
  }

  //Örnek olarak başarılı mesajını verelim
  //Toastr genellikle başarı ve hata mesajlarını kullanıcıya göstermemizi sağlar
  toast() {
    this._toastr.success('İşlem başarılı', 'HTTP GET');
  }

  //Sweet Alert'i çağırıyorum , genellikle silmek istediğinize emin misiniz gibi sorular sormamızı sağlar
  callSwal() {
    Swal.fire('Title Example');
  }

  //Spinner aslında yükleme animasyonu sağlıyor bizlere
  callSpinner() {
    /** spinner starts on init */
    this._spinner.show();

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this._spinner.hide();
    }, 5000);
  }

  //Uygulamamıza PWA kütüphanesini ekledik,amacı hem ui hem de backend operasyonlarını cache'lerek intersiz alanda da projenin çalışmasını sağlamak
  //ngsw-config.json üzerinden hem ui hemde api için gerekli bazı konfigürasyonlar yaptık
  //Apiden gelen dataları listeye ekledik
  getApi() {
    this._httpClient.get('https://jsonplaceholder.typicode.com/todos').subscribe((response: any) => {
      this.listApi = response;
    });
  }
}
