import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { InicioComponent } from './inicio/inicio.component';
import { RouterModule, Routes} from '@angular/router';
import { RegistrarInmuebleComponent } from './registrar-inmueble/registrar-inmueble.component';
import { BienesListComponent } from './bienes-list/bienes-list.component';
import { InfoInmuebleComponent } from './info-inmueble/info-inmueble.component';
import { CertificadoComponent } from './certificado/certificado.component';

const appRoutes : Routes=[
  {path : '', component : LoginComponent},
  {path : 'login', component : LoginComponent},
  {path : 'inicio/:id', component : InicioComponent},
  {path : 'registrar-inmueble', component : RegistrarInmuebleComponent},
  {path : 'bienes-list', component : BienesListComponent},
  {path : 'info-inmueble', component : InfoInmuebleComponent},
  {path : 'cert-inmueble', component : CertificadoComponent}
];

@NgModule({
  imports:      [ BrowserModule, FormsModule, RouterModule.forRoot(appRoutes) ],
  declarations: [ AppComponent, LoginComponent, InicioComponent, RegistrarInmuebleComponent, BienesListComponent,InfoInmuebleComponent, CertificadoComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
