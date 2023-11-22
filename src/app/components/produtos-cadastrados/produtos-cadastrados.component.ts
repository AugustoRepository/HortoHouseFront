import { Component } from '@angular/core';

@Component({
  selector: 'app-produtos-cadastrados',
  templateUrl: './produtos-cadastrados.component.html',
  styleUrls: ['./produtos-cadastrados.component.css']
})
export class ProdutosCadastradosComponent {

  produtos = [
    { id: 1, nome: 'Maçã', preco: 2.00, quantidade: 50 },
    { id: 2, nome: 'Alface', preco: 1.50, quantidade: 30 }
  ];

}
