import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClienteComponent } from './views/cliente/cliente.component';
import { HomeComponent } from './views/home/home.component';
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
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
