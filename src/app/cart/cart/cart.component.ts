// cart.component.ts
import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Product } from '../../models/product.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: Product[] = [];

  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit(): void {
    this.cartItems = this.cartService.getItems(); // ver productos del carrito
  }

  clearCart(): void {
    this.cartService.clearCart();
    this.cartItems = [];
  }

  goToHome(): void {
    this.router.navigate(['/home']); // ir a la página de inicio
  }
  goPaid(): void {
    this.router.navigate(['/checkout']); // ir a la página de inicio
  }

  removeFromCart(product: Product): void {
    this.cartService.removeFromCart(product);
    this.cartItems = this.cartService.getItems(); // Actualizar la lista de productos
  }

}
