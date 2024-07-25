import { Component, inject } from '@angular/core';
import { ContatosService } from '../contatos.service';
import { Observable } from 'rxjs';
import { ContatoList } from './contato-list';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-contatos-list',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './contatos-list.component.html',
  styleUrl: './contatos-list.component.scss'
})
export class ContatosListComponent {
  private contatosService = inject(ContatosService);

  contatos$ = new Observable<ContatoList[]>();

  constructor() {
    this.obterContatos();
  }

  private obterContatos() {
    this.contatos$ = this.contatosService.obterContatos('');
  }
}
