import { Component, inject } from '@angular/core';
import { ContatosService } from '../contatos.service';
import { Observable } from 'rxjs';
import { ContatoList } from './contato-list';
import { AsyncPipe } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contatos-list',
  standalone: true,
  imports: [AsyncPipe, ReactiveFormsModule ],
  templateUrl: './contatos-list.component.html',
  styleUrl: './contatos-list.component.scss'
})
export class ContatosListComponent {
  private contatosService = inject(ContatosService);

  contatos$ = new Observable<ContatoList[]>();
  isOpen: boolean = false;

  form = new FormGroup({
    nome: new FormControl(''),
    telefone: new FormControl(''),
    email: new FormControl(''),
    ddd: new FormControl('')
  });

  constructor() {
    this.obterContatos();
  }

  private obterContatos() {
    //this.contatos$ = this.contatosService.obterContatos('');
  }

  onSubmitFiltros() {
    console.log(this.form.value);
  }

  limparFiltros() {
    this.form.reset();
  }
}
