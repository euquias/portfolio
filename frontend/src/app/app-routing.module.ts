import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClienteComponent } from './views/cliente/cliente.component';
import { HomeComponent } from './views/home/home.component';
import { AtualizarProdutoComponent } from './views/produto/produto-crud/atualizar-produto/atualizar-produto.component';
import { CriarProdutoComponent } from './views/produto/produto-crud/criar-produto/criar-produto.component';
import { ExibirProdutoComponent } from './views/produto/produto-crud/exibir-produto/exibir-produto.component';
import { CadastoProdutoComponent } from './views/produto/produto.component';


const routes: Routes = [
  {
    path:'',
    component:HomeComponent
},
{
  path:'produto',
  component: CadastoProdutoComponent
},
{
  path:'cliente',
  component:ClienteComponent
},
{
  path:'criaproduto',
  component:CriarProdutoComponent
},
{
  path:'update/:id',
  component:AtualizarProdutoComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
