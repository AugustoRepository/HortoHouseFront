import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponentComponent } from './components/login-component/login-component.component';
import { ComprasComponentComponent } from './components/compras-component/compras-component.component';
import { VendasComponentComponent } from './components/vendas-component/vendas-component.component';
import { RegisterComponentComponent } from './components/register-component/register-component.component';
import { AdministracaoComponentComponent } from './components/administracao-component/administracao-component.component';
import { HomeComponent } from './components/home/home.component';
import { PagamentoComponent } from './components/pagamento/pagamento.component';
import { CarrinhoComponent } from './components/carrinho/carrinho.component';
import { AdicionarProdutoComponent } from './components/adicionar-produto/adicionar-produto.component';
import { ProdutosCadastradosComponent } from './components/produtos-cadastrados/produtos-cadastrados.component';



const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: 'login', component: LoginComponentComponent},
  {path: 'compras', component: ComprasComponentComponent},
  {path: 'vendas', component: VendasComponentComponent},
  {path: 'cadastro', component: RegisterComponentComponent},
  {path: 'administracao', component: AdministracaoComponentComponent},
  {path: 'pagamento', component: PagamentoComponent},
  {path: 'carrinho', component: CarrinhoComponent},
  {path: 'vendas', component: VendasComponentComponent},
  {path: 'home', component: HomeComponent},
  {path: 'carrinho', component: CarrinhoComponent},
  {path: 'adicionar', component: AdicionarProdutoComponent},
  {path: 'produtosCadastrados', component: ProdutosCadastradosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
