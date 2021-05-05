import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BarraInferiorComponent } from './components/barra-inferior/barra-inferior.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { SoporteComponent } from './components/soporte/soporte.component';
import { VetResultadosComponent } from './components/vet-resultados/vet-resultados.component';

const routes: Routes = [
  { path: '', component: BarraInferiorComponent },
  { path: 'soporte', component: SoporteComponent},
  { path: 'vet-resultados', component: VetResultadosComponent},
  { path: 'servicios', component: ServiciosComponent},
  { path: 'contacto', component: ContactoComponent}
];  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
