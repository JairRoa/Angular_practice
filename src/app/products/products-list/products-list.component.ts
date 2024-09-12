import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';
import { ProductService } from '../product.service';
import { CommonModule } from '@angular/common';
import { CartService } from '../../cart/cart.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  productList: Product[] = [];
  searchId: number | null = null;

  constructor(
    private productService: ProductService,
    private cartService: CartService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe(
      (data: Product[]) => {
        console.log('Productos recibidos:', data);  // Verificar los datos
        this.productList = data;
      },
      (error) => {
        console.error('Error al obtener productos:', error);
      }
    );
  }

  getProductById(): void {
    if (this.searchId !== null) {
      this.productService.getProductById(this.searchId).subscribe(
        (product: Product) => {
          alert(`El producto seleccionado es:\n\nID: ${product.id}\nNombre: ${product.title}\nDescripción: ${product.description}\nPrecio: ${product.price}`);
        },
        (error) => {
          alert('Producto no encontrado');
        }
      );
    } else {
      alert('Por favor ingrese un ID de producto');
    }
  }

  onAddToCart(product: Product): void {
    this.cartService.addToCart(product);
    alert(`Se ha agregado ${product.title} al carrito`);
  }

  onViewCart(): void {
    this.router.navigate(['/cart']);
  }
}
