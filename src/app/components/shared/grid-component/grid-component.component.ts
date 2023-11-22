import { Component } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ProdutoService } from 'src/app/services/produto.service copy';

@Component({
  selector: 'app-grid-component',
  templateUrl: './grid-component.component.html',
  styleUrls: ['./grid-component.component.css']
})
export class GridComponentComponent {
  product : Product[] = [];

   //método construtor
   constructor(
    private produtoService: ProdutoService ,
  ) {
  }
  ngOnInit(): void {
    // this.spinner.show();
    debugger
    this.produtoService.getAll()
      .subscribe({
        next: (data) => {
          debugger
          this.product = data;
        },
        error: (e) => {
          console.log(e.error);
        }
      })
  }

}
