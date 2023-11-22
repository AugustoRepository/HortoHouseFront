import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/models/cartitem.model';
import { Product } from 'src/app/models/product.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {
  cartItems: CartItem[] | any;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  this.cartService.getAll().subscribe({
    next: (data) => {     
      this.cartItems = data;
    },
    error: (e) => {
      console.log(e.error);
    }
  });
  

    console.log(this.cartItems)
  }

  clearCart(): void {
    this.cartService.clearCart();
    this.cartItems = [];
  }
}
