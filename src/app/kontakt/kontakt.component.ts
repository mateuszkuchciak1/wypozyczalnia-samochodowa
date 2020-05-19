import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { SamochodSerwisService } from '../core/serwisy/samochod-serwis.service';
import { ToastrService } from 'ngx-toastr';
import { Klient } from '../samochody/models/klient';
import { HttpService } from '../core/serwisy/http.service';

@Component({
  selector: 'app-kontakt',
  templateUrl: './kontakt.component.html',
  styleUrls: ['./kontakt.component.css']
})
export class KontaktComponent implements OnInit {

  kontaktForm: FormGroup;


  constructor(private formBuilder: FormBuilder, private samochodSerwis: SamochodSerwisService, private toastr: ToastrService, public http: HttpService) { }

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

      let klient:Klient = {
        imie: this.kontaktForm.value.imie,
        nazwisko: this.kontaktForm.value.nazwisko,
        email: this.kontaktForm.value.email,
        pytanie: this.kontaktForm.value.pytanie,
        miasto: this.kontaktForm.value.miasto
      }
    


      this.http.sendEmail("http://localhost:3000/sendmail", klient).subscribe( //wysyłanie posta do serwera 
      data => {
        let res:any = data; 
        console.log(
          `👏 > 👏 > 👏 > 👏 ${klient.imie} Wysłano do ciebie emaila potwierdzającego ${res.messageId}`
        );
      },
      err => {
        console.log(err);
       
      },() => {
        
      }
    );

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
