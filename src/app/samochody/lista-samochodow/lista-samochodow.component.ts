import { Component, OnInit } from '@angular/core';
import { Samochod } from '../models/samochod';
import { SamochodSerwisService } from 'src/app/core/serwisy/samochod-serwis.service';

@Component({
  selector: 'app-lista-samochodow',
  templateUrl: './lista-samochodow.component.html',
  styleUrls: ['./lista-samochodow.component.css']
})
export class ListaSamochodowComponent implements OnInit {

  samochod_wyszukaj:any='Wszystkie';
  samochody:Samochod[];

  

  



  constructor(private samochodSerwis:SamochodSerwisService) { }

  ngOnInit(): void {
    this.samochodSerwis.getSamochod().subscribe(Response=>{this.samochody=Response});
  }

}
