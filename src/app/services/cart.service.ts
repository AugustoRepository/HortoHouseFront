import { Injectable } from '@angular/core';
import { CartItem } from '../models/cartitem.model';
import { Product } from '../models/product.model';
import { Observable, catchError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  uri: string = environment.apiContatos + "/cartItens";
  constructor(
    private httpClient: HttpClient
  ) { }
  
  private cartItems: CartItem[] = [];

  addToCart(product: Product): void {
    const existingItem = this.cartItems.find(item => item.product === product);

    if (existingItem) {
      existingItem.quantity++;
    } else {
      this.cartItems.push({ product, quantity: 1 });
    }
  }

  getCartItems(): CartItem[] {
    return this.cartItems;
  }

  getAll(): Observable<CartItem[]> {
     return this.httpClient.get<CartItem[]>(this.uri);    
  }

  clearCart(): void {
    this.cartItems = [];
  }
}
function throwError(error: any): any {
  throw new Error('Function not implemented.');
}

