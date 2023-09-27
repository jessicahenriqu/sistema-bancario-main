import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { CadastroClienteComponent } from
  './pages/cliente/cadastro-cliente/cadastro-cliente.component';
import { ListagemClienteComponent } from
  './pages/cliente/listagem-cliente/listagem-cliente.component';
import { CadastrarContaComponent } from './bank/conta/cadastrar-conta/cadastrar-conta.component';

const routes: Routes = [
  {
    path: 'menu',
    component: MenuComponent,
  },
 
  
  {
    path: 'cliente',
    children: [
      {
        path: 'novo',
        component: CadastroClienteComponent
      },
      {
        path: 'editar/:id',
        component: CadastroClienteComponent
      },
      {
        path: '',
        component: ListagemClienteComponent,
      },
    ]
  },
  {
    path: '',
    component: ListagemClienteComponent,
  },

  {
    path: 'conta',
    children: [
      {
        path: 'nova',
        component: CadastrarContaComponent
      },
      {
        path: 'editar/:id',
        component: CadastrarContaComponent
      }



    ]
  },


  



];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }