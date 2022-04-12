import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/template/header/header.component';
import { BoryComponent } from './components/template/bory/bory.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { HomeComponent } from './views/home/home.component';
import { CadastoProdutoComponent} from './views/produto/produto.component';
import { ClienteComponent } from './views/cliente/cliente.component';
import { CriarProdutoComponent } from './views/produto/produto-crud/criar-produto/criar-produto.component';
import { AtualizarProdutoComponent } from './views/produto/produto-crud/atualizar-produto/atualizar-produto.component';
import { RemoverProdutoComponent } from './views/produto/produto-crud/remover-produto/remover-produto.component';
import { ExipirProdutoComponent } from './views/produto/produto-crud/exipir-produto/exipir-produto.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BoryComponent,
    FooterComponent,
    HomeComponent,
    CadastoProdutoComponent,
    ClienteComponent,
    CriarProdutoComponent,
    AtualizarProdutoComponent,
    RemoverProdutoComponent,
    ExipirProdutoComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
