import { Usuario } from './../model/usuario';
import { FormsModule } from '@angular/forms';
import { UsuariosService } from './../usuarios.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Usuarios } from '../models/usuarios';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-usuarios-form',
  templateUrl: './usuarios-form.component.html',
  styleUrls: ['./usuarios-form.component.css']
})
export class UsuariosFormComponent implements OnInit {


  usuarioId : number;
  usuario : Usuario;
  constructor(private usuarioService: UsuariosService, private route: ActivatedRoute) {
    this.usuarioId = this.route.snapshot.params.id;
    this.get(this.usuarioId);
  }

  ngOnInit() {
    this.usuario = new Usuario();
    this.get(this.usuarioId);
  }

  onClickSubmit() {
    this.usuarioService.update(this.usuario.id, this.usuario).subscribe(
      val => {
          console.log("PUT call successful value returned in body",
                      val);
      },
      response => {
          console.log("PUT call in error", response);
      },
      () => {
          console.log("The PUT observable is now completed.");
      }
  );
 }

 get(usuarioId : number) {
   console.log(usuarioId)
  this.usuarioService.get(usuarioId).subscribe(arg => {
    this.usuario = arg;
  });
 }
}
