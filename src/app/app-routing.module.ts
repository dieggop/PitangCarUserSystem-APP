import { UsuariosFormComponent } from './usuarios-form/usuarios-form.component';
import { CarrosListagemComponent } from './carros-listagem/carros-listagem.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsuariosListagemComponent } from './usuarios-listagem/usuarios-listagem.component';


const routes: Routes = [
{path: '', component: HomeComponent},
{path: 'usuarios', component: UsuariosListagemComponent},
{path: 'usuarios/:id/view', component: UsuariosFormComponent},
{path: 'carros', component: CarrosListagemComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule]
})
export class AppRoutingModule { }
