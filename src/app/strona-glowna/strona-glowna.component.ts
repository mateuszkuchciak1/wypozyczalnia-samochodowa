import { Component, OnInit } from '@angular/core';
import { Samochod } from '../samochody/models/samochod';
import { SamochodSerwisService } from '../core/serwisy/samochod-serwis.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-strona-glowna',
  templateUrl: './strona-glowna.component.html',
  styleUrls: ['./strona-glowna.component.css']
})
export class StronaGlownaComponent implements OnInit {


  samochody: Samochod[];

  constructor(private samochodSerwis: SamochodSerwisService) { }

  ngOnInit(): void {
    this.samochodSerwis.getSamochod().subscribe(Response => { this.samochody = Response });
  }



}
