import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/models/cartitem.model';
import { Product } from 'src/app/models/product.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-compras-component',
  templateUrl: './compras-component.component.html',
  styleUrls: ['./compras-component.component.css']
})
export class ComprasComponentComponent implements OnInit  {
  


  constructor(private cartService: CartService) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }



}
