import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { CadastroComponent} from './cadastro/cadastro.component';
import {LoginComponent} from './login/login.component';
import {CartaoComponent} from './cartao/cartao.component';

const routes: Routes = [
  { path: 'Cadastro', component: CadastroComponent },
  { path: 'Login', component: LoginComponent },
  { path: 'Cartao', component: CartaoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
