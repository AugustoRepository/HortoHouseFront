import { Injectable } from '@angular/core';
import { CartItem } from '../models/cartitem.model';
import { Product } from '../models/product.model';
import { Observable, catchError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  uri: string = environment.apiContatos + "/produtos";
  constructor(
    private httpClient: HttpClient
  ) { }
  


  getAll(): Observable<Product[]> {
     return this.httpClient.get<Product[]>(this.uri);    
  }

}
function throwError(error: any): any {
  throw new Error('Function not implemented.');
}

