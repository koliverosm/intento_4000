import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { HomeComponent } from './pages/home/home.component';
import { CumpleComponent } from './pages/cumple/cumple.component';
import { FiestaemComponent } from './pages/fiestaem/fiestaem.component';
import { FiestainComponent } from './pages/fiestain/fiestain.component';
import { MatriComponent } from './pages/matri/matri.component';
import { PrimecomuComponent } from './pages/primecomu/primecomu.component';
import { QuienessComponent } from './pages/quieness/quieness.component';
import { QuinceComponent } from './pages/quince/quince.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { SalonesComponent } from './pages/salones/salones.component';



@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    HomeComponent,
    CumpleComponent,
    FiestaemComponent,
    FiestainComponent,
    MatriComponent,
    PrimecomuComponent,
    QuienessComponent,
    QuinceComponent,
    RegistroComponent,
    SalonesComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
