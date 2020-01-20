import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { Usuarioresponse } from './models/usuarioresponse';
@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constatosUrl = 'https://pitangcarusersystem.herokuapp.com/api/users';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }
  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get<Usuarioresponse>(`${this.constatosUrl}`)
  }
}
