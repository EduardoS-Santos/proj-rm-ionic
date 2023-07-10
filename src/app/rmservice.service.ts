import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RmserviceService {
  constructor(private http: HttpClient) {}

  url: any = 'https://rickandmortyapi.com/api/character';

  listarCarac() {
    return this.http.get(`${this.url}`);
  }

  pesquisarCarac(nome: string) {
    return this.http.get(`${this.url}/?name=${nome}`);
  }
}
