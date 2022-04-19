import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/template/header/header.component';
import { BoryComponent } from './components/template/bory/bory.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { HomeComponent } from './views/home/home.component';
import { CadastoProdutoComponent } from './views/produto/produto.component';
import { ClienteComponent } from './views/cliente/cliente.component';
import { CriarProdutoComponent } from './views/produto/produto-crud/criar-produto/criar-produto.component';
import { AtualizarProdutoComponent } from './views/produto/produto-crud/atualizar-produto/atualizar-produto.component';
import { RemoverProdutoComponent } from './views/produto/produto-crud/remover-produto/remover-produto.component';

import { HttpClientModule } from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ExibirProdutoComponent } from './views/produto/produto-crud/exibir-produto/exibir-produto.component';
import { LoginComponent } from './views/cliente/login/login.component';
import { CadastroUsuarioComponent } from './views/cliente/cadastro-usuario/cadastro-usuario.component';

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
    ExibirProdutoComponent,
    LoginComponent,
    CadastroUsuarioComponent,
   

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
