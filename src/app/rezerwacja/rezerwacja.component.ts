import { Component, OnInit } from '@angular/core';
import { Samochod } from '../samochody/models/samochod';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SamochodSerwisService } from '../core/serwisy/samochod-serwis.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-rezerwacja',
  templateUrl: './rezerwacja.component.html',
  styleUrls: ['./rezerwacja.component.css']
})
export class RezerwacjaComponent implements OnInit {

  nowy: any;
  rezerwacjaForm: FormGroup;
  samochody: Samochod[];

  constructor(private formBuilder: FormBuilder, private samochodSerwis: SamochodSerwisService, private toastr: ToastrService) { }

  ngOnInit(): void {

    this.rezerwacjaForm = this.buildRezerwacja();
    this.samochodSerwis.getSamochod().subscribe(Response => { this.samochody = Response });
  }
  // tworzenie modelu rezerwacji 
  buildRezerwacja() {
    return this.formBuilder.group({
      samochod: ['', Validators.required],
      imie: ['', Validators.required],
      nazwisko: ['', Validators.required],
      email: ['', Validators.required],
      data_odbioru: ['', Validators.required],
      data_zwrotu: ['', Validators.required],
      miasto: ['', Validators.required],
    })
  }


  createRezerwacja() {
    console.log(this.rezerwacjaForm);
    this.samochodSerwis.addRezerwacja(this.rezerwacjaForm.value)
      .then(this.onCreatingSuccess.bind(this), this.onCreatingFailure.bind(this));

  }
  private onCreatingSuccess() {
    this.toastr.success('Wysłano', 'Pomyślnie',
      { timeOut: 2000 });;
    this.rezerwacjaForm.reset();

  }




  private onCreatingFailure() {
    this.toastr.error('Błąd', 'Nie zostało wysłane',
      { timeOut: 2000 });;

  }

}
