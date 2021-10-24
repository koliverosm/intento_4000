import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
import { ContactenosComponent } from './pages/contactenos/contactenos.component';
const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'Cumple', component: CumpleComponent },
  { path: 'Fiestaem', component: FiestaemComponent },
  { path: 'Fiestain', component: FiestainComponent },
  { path: 'Matrimonio', component: MatriComponent },
  { path: 'Primeracomunion', component: PrimecomuComponent },
  { path: 'Quienessomos', component: QuienessComponent },
  { path: 'Quince', component: QuinceComponent },
  { path: 'Registro', component: RegistroComponent },
  { path: 'Salones', component: SalonesComponent },
  { path: 'contactenos', component: ContactenosComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
