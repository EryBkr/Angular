import { Component } from '@angular/core';
import { SharedModule } from './common/shared/shared.module';

//Projenin tümüyle standAlone mantıkta çalışması için bazı düzenlemeler yaptım,app.component'i bile standAlone olarak oluşturdum
@Component({
  selector: 'app-root',
  standalone: true, //Component'in standAlone olduğunu buradan anlayabiliriz
  //Shared Module içerisinde ortak olarak kullancağım module'ler var bu bir best practices'tir
  imports: [SharedModule], //Artık bu component bağımsız olduğu için yani bir module bağımlı olmadığı için module tanımlamalarını burada yapmalıyız
  template: `<router-outlet></router-outlet>`,
})
export class AppComponent {}
