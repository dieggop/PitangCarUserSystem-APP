import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuarios-listagem',
  templateUrl: './usuarios-listagem.component.html',
  styleUrls: ['./usuarios-listagem.component.css']
})
export class UsuariosListagemComponent implements OnInit {

  usuarios = [
    {
      "id": 1,
      "firstName": "Dieggo",
      "lastName": "Teste",
      "email": "dieggo@email.com",
      "birthday": "1987-02-27",
      "login": "dieggo",
      "password": null,
      "phone": "988888888",
      "createdAt": "2020-01-19",
      "lastLogin": "2020-01-19",
      "cars": [
        {
          "id": 1,
          "year": 2009,
          "licensePlate": "PFH-1375",
          "model": "Ford Ka",
          "color": "Prata",
          "count": 0
        }
      ]
    },    {
      "id": 2,
      "firstName": "Izaias",
      "lastName": "Teste",
      "email": "dieggo@email.com",
      "birthday": "1987-02-27",
      "login": "dieggo",
      "password": null,
      "phone": "988888888",
      "createdAt": "2020-01-19",
      "lastLogin": "2020-01-19",
      "cars": [
        {
          "id": 1,
          "year": 2009,
          "licensePlate": "PFH-1375",
          "model": "Ford Ka",
          "color": "Prata",
          "count": 0
        }
      ]
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
