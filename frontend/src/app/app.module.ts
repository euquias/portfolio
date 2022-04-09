import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/template/header/header.component';
import { BoryComponent } from './components/template/bory/bory.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { HomeComponent } from './views/home/home.component';
import { CadastoProdutoComponent } from './views/cadasto-produto/cadasto-produto.component';
import { ClienteComponent } from './views/cliente/cliente.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BoryComponent,
    FooterComponent,
    HomeComponent,
    CadastoProdutoComponent,
    ClienteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
