import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contato-form',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './contato-form.component.html',
  styleUrl: './contato-form.component.scss'
})
export class ContatoFormComponent {
  form = new FormGroup({
    id: new FormControl(''),
    nome: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(100)
    ])
  });

  onSubmit() {
    if (this.form.valid) {

    }
  }

  onReset() {
    this.form.reset();
  }
}
