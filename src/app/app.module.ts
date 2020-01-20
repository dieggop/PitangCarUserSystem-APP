import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuariosListagemComponent } from './usuarios-listagem/usuarios-listagem.component';
import { UsuariosFormComponent } from './usuarios-form/usuarios-form.component';
import { CarrosListagemComponent } from './carros-listagem/carros-listagem.component';
import { CarrosFormComponent } from './carros-form/carros-form.component';
import { HomeComponent } from './home/home.component';
import { UsuariosService } from './usuarios.service';

@NgModule({
  declarations: [
    AppComponent,
    UsuariosListagemComponent,
    UsuariosFormComponent,
    CarrosListagemComponent,
    CarrosFormComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [UsuariosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
