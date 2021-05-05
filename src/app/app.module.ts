import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { LoginComponent } from './component/login/login.component';
import { FiltroComponent } from './components/filtro/filtro.component';
import { VetResultadosComponent } from './components/vet-resultados/vet-resultados.component';
import { BarraInferiorComponent } from './components/barra-inferior/barra-inferior.component';
import { SoporteComponent } from './components/soporte/soporte.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { NavegacionComponent } from './components/navegacion/navegacion.component';
import { ContactoComponent } from './components/contacto/contacto.component';

@NgModule({
  declarations: [
    AppComponent,
  //  LoginComponent,
    FiltroComponent,
    VetResultadosComponent,
    BarraInferiorComponent,
    SoporteComponent,
    ServiciosComponent,
    NavegacionComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
