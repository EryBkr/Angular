import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'userListPipe',
})
export class UserListPipe implements PipeTransform {
  transform(
    value: { name: string; age: number }[],
    search: string
  ): { name: string; age: number }[] {
    //Aranacak kelime yoksa işlem yapmasın
    if (search == '') return value;
    return value.filter((p) =>
      p.name.toLowerCase().includes(search.toLowerCase())
    );
  }
}
