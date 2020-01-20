import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constatosUrl = 'https://pitangcarusersystem.herokuapp.com/api/users';

  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get<any[]>(`${this.constatosUrl}`)
  }
}
