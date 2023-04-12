import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Employee } from 'src/app/models/employee.model';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss'],
})
export class ReactiveFormComponent implements OnInit {
  //Personel Listesi
  employees: Employee[] = [];

  //Update işlemi mi yapılacak
  isUpdateFormActive: boolean = false;

  //Update işlemi yapacağımız data'nın index'ini tutacak
  updateIndex: number = -1;

  //DatePipe form elemanı içerisinde tarih formatını düzenlemek için eklediğimiz hazır bir pipe
  constructor(private _date: DatePipe) {}

  //Component oluşturulmadan önce çalışacak
  ngOnInit(): void {
    //Form'u component başlamadan önce initilaize ediyorum
    this.createAddForm();
  }

  //Reactive Form için onun türünde bir entity oluşturuyorum
  addForm: FormGroup;
  updateForm: FormGroup;

  //Reactive Form yapısını initilaize ediyorum (Validasyon ve ilk değer atamasını da yapıyorum)
  createAddForm() {
    this.addForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      startingDate: new FormControl(
        this._date.transform(new Date(), 'yyyy-MM-dd')
      ),
      department: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
    });
  }
  createUpdateForm() {
    this.updateForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      startingDate: new FormControl(
        this._date.transform(new Date(), 'yyyy-MM-dd')
      ),
      department: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
    });
  }

  //Formdan aldığımız değerleri employees dizisine ekleyeceğiz
  save() {
    //Validasyon sorunumuz yoksa
    if (this.addForm.valid) {
      //tablodan gelen veriyi alıyoruz
      var employee = this.addForm.value;
      this.employees.push(employee);

      //Form içeriğini sıfırla
      // this.addForm.reset();
      // this.addForm.controls["startingDate"].setValue(this._date.transform(new Date(), 'yyyy-MM-dd'));
      //Ya da böyle de sıfırlayabiliriz
      this.createAddForm();
    }
  }

  get(model: Employee, index: number) {

    //Get Metodu çağrılıysa Update formumu initilaize ediyorum
    this.createUpdateForm();

    //Tablodan seçilmiş model ile birlikte formumu gerekli datalarla dolduruyorum
    this.updateForm.controls['name'].setValue(model.name);
    this.updateForm.controls['department'].setValue(model.department);
    this.updateForm.controls['startingDate'].setValue(model.startingDate);

    //Update Formumunun gözükebilmesi için true'ya set ediyorum
    this.isUpdateFormActive = true;

    this.updateIndex = index;
  }

  update() {
    //Form Valid ise güncellemeyi gerçekleştir
    if(this.updateForm.valid){
      this.employees[this.updateIndex]=this.updateForm.value;
      this.cancel();
    }
  }

  //Update sürecini sonlandıracak
  cancel() {
    this.isUpdateFormActive = false;
  }
}
