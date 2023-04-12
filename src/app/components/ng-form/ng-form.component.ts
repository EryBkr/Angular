import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Employee } from 'src/app/models/employee.model';

@Component({
  selector: 'app-ng-form',
  templateUrl: './ng-form.component.html',
  styleUrls: ['./ng-form.component.scss'],
})
export class NgFormComponent {
  //Personel Listesi
  employees: Employee[] = [];

  //Ekleme işlemi neticesinde elimizde olacak model
  addEmployeeModel: Employee = new Employee();

  //Güncelleme işlemi neticesinde elimizde olacak model
  updateEmployeeModel: Employee = new Employee();

  //Update işlemi yapacağımız data'nın index'ini tutacak
  updateIndex: number = -1;

  //Update işlemi mi yapılacak
  isUpdateFormActive: boolean = false;

  //Date formatlarını düzenlemek için ekledik
  constructor(private _datePipe: DatePipe) {
    //Forma uygun date haline getirdik
    this.addEmployeeModel.startingDate = this._datePipe.transform(
      new Date(),
      'yyyy-MM-dd'
    );
  }

  //NgForm Submit olduğunda bu metot çalışacak
  save(addForm: NgForm) {
    //Form Valid ise
    if (addForm.valid) {
      //Form dan gelen değerleri ekliyorum (addEmployeeModel'e direkt bind edilmiş zaten)
      this.employees.push(this.addEmployeeModel);

      //Ekleme işleminden sonra form'u sıfırlıyorum
      //addForm.reset();
      //Ya da model bind işlemi yaptığımız için yeni bir instance oluşturuyorum
      this.addEmployeeModel = new Employee();
      //Forma uygun date haline getirdik
      this.addEmployeeModel.startingDate = this._datePipe.transform(
        new Date(),
        'yyyy-MM-dd'
      );
    }
  }

  get(model: Employee, index: number) {
    //Index'i kullanabilmek için adına aldık
    this.updateIndex = index;
    //Değer ataması yapabilmek için seperate operator kullandık
    //(diğer türlü referans ataması yapacak ve kontrol bizde olmayacak aslında çünkü biz belli bir validasyon işlemi sonrasında aktarılmasını istiyoruz)
    this.updateEmployeeModel = { ...model };

    //Update Formumunun gözükebilmesi için true'ya set ediyorum
    this.isUpdateFormActive = true;
  }

  //Update sürecini sonlandıracak
  cancel() {
    this.isUpdateFormActive = false;
  }

  update(updateForm: NgForm) {
    //Form Valid ise güncellemeyi gerçekleştir
    if (updateForm.valid) {
      //Get metodu ile oluşturduğumuz updateEmployeeModel ve Index ile birlikte gerekli değişimi gerçekleştiriyoruz
      //Değer ataması yapabilmek için seperate operator kullandık
      //(diğer türlü referans ataması yapacak ve kontrol bizde olmayacak aslında çünkü biz belli bir validasyon işlemi sonrasında aktarılmasını istiyoruz)
      this.employees[this.updateIndex] = { ...this.updateEmployeeModel };
      this.cancel();
    }
  }
}
