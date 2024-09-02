import { Routes } from "@angular/router";
import { ContatosListComponent } from "./contatos-list/contatos-list.component";
import { ContatoFormComponent } from "./contato-form/contato-form.component";

export const CONTATO_ROUTES: Routes = [
    { path: '', component: ContatosListComponent },
    { path: 'new', component: ContatoFormComponent }
]