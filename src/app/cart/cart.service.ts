import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private items: Product[] = [];

  constructor() {}

  addToCart(product: Product): void {
    this.items.push(product);
  }

  getItems(): Product[] {
    return this.items;
  }

  clearCart(): void {
    this.items = [];
  }

  removeFromCart(product: Product): void {
    this.items = this.items.filter(item => item !== product);
  }
}
