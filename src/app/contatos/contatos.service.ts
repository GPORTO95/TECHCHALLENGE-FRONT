import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ContatoList } from './contatos-list/contato-list';

@Injectable({
  providedIn: 'root'
})
export class ContatosService {

  private readonly API = `http://localhost:5000/api/v1`;
  private http = inject(HttpClient);


  obterContatos(ddd: string) {
    return this.http.get<ContatoList[]>(`${this.API}/contatos`);
  }
}
