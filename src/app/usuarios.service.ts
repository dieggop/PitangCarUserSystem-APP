import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { Usuarioresponse } from './models/usuarioresponse';
import { Usuarios } from './models/usuarios';
@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constatosUrl = 'http://localhost:8080/api/users';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json',
    'Access-Control-Allow-Methods': 'POST, PUT, DELETE',
    'Access-Control-Allow-Origin':'*'
  })
  }
  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get<Usuarioresponse>(`${this.constatosUrl}`)
  }

  get(id: number) {
    return this.http.get<Usuarios>(`${this.constatosUrl}/${id}`)
  }

  update(id: number, usuario: Usuarios) {


    console.log(id)
    console.log(usuario)
    return this.http.put(`${this.constatosUrl}/${id}`, usuario, this.httpOptions)
  }
}
