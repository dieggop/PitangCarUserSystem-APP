import { Usuarios } from './../models/usuarios';
import { Component, OnInit } from '@angular/core';
import { UsuariosService } from './../usuarios.service';

@Component({
  selector: 'app-usuarios-listagem',
  templateUrl: './usuarios-listagem.component.html',
  styleUrls: ['./usuarios-listagem.component.css']
})
export class UsuariosListagemComponent implements OnInit {

  usuarios : Array<Usuarios>;
  constructor(private usuarioService: UsuariosService) { }

  ngOnInit() {
    this.listar();
  }
  listar() {
   this.usuarioService.listar().subscribe(arg => this.usuarios = arg.usuarios);

  }
}
