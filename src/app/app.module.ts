import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ModalModule } from 'ngx-bootstrap/modal';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponentComponent } from './components/login-component/login-component.component';
import { RegisterComponentComponent } from './components/register-component/register-component.component';
import { VendasComponentComponent } from './components/vendas-component/vendas-component.component';
import { ComprasComponentComponent } from './components/compras-component/compras-component.component';
import { GridComponentComponent } from './components/shared/grid-component/grid-component.component';
import { NavbarComponentComponent } from './components/navbar-component/navbar-component.component';
import { AdministracaoComponentComponent } from './components/administracao-component/administracao-component.component';
import { HomeComponent } from './components/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { CarrinhoComponent } from './components/carrinho/carrinho.component';
import { AdicionarProdutoComponent } from './components/adicionar-produto/adicionar-produto.component';
import { PagamentoComponent } from './components/pagamento/pagamento.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProdutosCadastradosComponent } from './components/produtos-cadastrados/produtos-cadastrados.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponentComponent,
    LoginComponentComponent,
    RegisterComponentComponent,
    VendasComponentComponent,
    ComprasComponentComponent,
    GridComponentComponent,
    AdministracaoComponentComponent,
    HomeComponent,
    CarrinhoComponent,
    PagamentoComponent,
    AdicionarProdutoComponent,
    ProdutosCadastradosComponent,    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ModalModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
