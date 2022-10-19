import { Component, NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CadastroUsuarioComponent } from "./views/cliente/cadastro-usuario/cadastro-usuario.component";

import { ClienteComponent } from "./views/cliente/cliente.component";
import { LoginComponent } from "./views/cliente/login/login.component";
import { AtualizarProdutoComponent } from "./views/produto/produto-crud/atualizar-produto/atualizar-produto.component";
import { CriarProdutoComponent } from "./views/produto/produto-crud/criar-produto/criar-produto.component";
import { ExibirProdutoComponent } from "./views/produto/produto-crud/exibir-produto/exibir-produto.component";
import { RemoverProdutoComponent } from "./views/produto/produto-crud/remover-produto/remover-produto.component";
import { CadastoProdutoComponent } from "./views/produto/produto.component";
import { LoginGuad } from "./views/cliente/login-guard";
import { HeaderComponent } from "./components/template/header/header.component";

const routes: Routes = [
  {
    path: "",
    component: HeaderComponent,
  },
  {
    path: "produtos",
    component: CadastoProdutoComponent,
    canLoad: [LoginGuad],
  },
  {
    path: "cliente",
    component: ClienteComponent,
    canLoad: [LoginGuad],
  },
  {
    path: "criaproduto",
    component: CriarProdutoComponent,
    canLoad: [LoginGuad],
  },
  {
    path: "update/:id",
    component: AtualizarProdutoComponent,
    canLoad: [LoginGuad],
  },
  {
    path: "remover/:id",
    component: RemoverProdutoComponent,
    canLoad: [LoginGuad],
  },
  {
    path: "cadastra",
    component: CadastroUsuarioComponent,
  },
  {
    path: "login",
    component: LoginComponent,
  },
  {
  path: "exibir",
  component: ExibirProdutoComponent,
  canLoad: [LoginGuad],
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
