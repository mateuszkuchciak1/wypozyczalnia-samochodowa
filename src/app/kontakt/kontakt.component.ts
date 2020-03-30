import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { SamochodSerwisService } from '../core/serwisy/samochod-serwis.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-kontakt',
  templateUrl: './kontakt.component.html',
  styleUrls: ['./kontakt.component.css']
})
export class KontaktComponent implements OnInit {

  kontaktForm: FormGroup;


  constructor(private formBuilder: FormBuilder, private samochodSerwis: SamochodSerwisService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.kontaktForm = this.buildKontakt();
  }



  // tworzenie modelu rezerwacji 
  buildKontakt() {
    return this.formBuilder.group({
      imie: ['', Validators.required],
      nazwisko: ['', Validators.required],
      email: ['', Validators.required],
      pytanie: ['', Validators.required],
      miasto: ['', Validators.required],
    })
  }

  createKontakt() {
    console.log(this.kontaktForm);
    this.samochodSerwis.addKontakt(this.kontaktForm.value)
      .then(this.onCreatingSuccess.bind(this), this.onCreatingFailure.bind(this));



  }
  private onCreatingSuccess() {
    this.toastr.success('Wysłano', 'Pomyślnie',
      { timeOut: 2000 });;
    this.kontaktForm.reset();

  }




  private onCreatingFailure(error) {
    this.toastr.error('Błąd', 'Nie zostało wysłane',
      { timeOut: 2000 });;

  }

}
