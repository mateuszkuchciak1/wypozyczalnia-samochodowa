import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { StronaGlownaComponent } from './strona-glowna/strona-glowna.component';
import { KontaktComponent } from './kontakt/kontakt.component';
import { CoreModule } from './core/core.module';
import { RezerwacjaComponent } from './rezerwacja/rezerwacja.component';
import {RouterModule,Routes} from '@angular/router';
import { NavbarComponent } from './core/navbar/navbar.component';
import { ListaSamochodowComponent } from './samochody/lista-samochodow/lista-samochodow.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import{ AngularFireModule} from "angularfire2";
import{ AngularFireDatabaseModule} from "angularfire2/database";
import { environment } from 'src/environments/environment';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';




const routes:Routes=[
  {path:'glowna',component:StronaGlownaComponent},
  {path:'kontakt', component:KontaktComponent},
  {path:'rezerwacja', component:RezerwacjaComponent},
  {path:'samochody', component:ListaSamochodowComponent},
  {path:'', redirectTo:'glowna', pathMatch:'full'},
  {path:'navbar', component:NavbarComponent},
];




@NgModule({
  declarations: [
    AppComponent,
    StronaGlownaComponent,
    KontaktComponent,
    RezerwacjaComponent,
    ListaSamochodowComponent
    
  ],
  imports: [
    BrowserModule,
    CoreModule,
    NgSelectModule, 
    FormsModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
