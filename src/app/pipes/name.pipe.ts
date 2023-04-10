import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'namePipe',
})
export class NamePipe implements PipeTransform {
  //Parametreler bizler tarafından belirlenebilir
  transform(value: string[], search: string): string[] {
    //Aranacak kelime yoksa işlem yapmasın
    if (search == '') return value;
    //yazılan filter sonuç olarak gönder, gönderdiğimiz array içerisinde gerekli katarı arıyoruz
    return value.filter((p) => p.toLowerCase().includes(search.toLowerCase()));
  }
}
