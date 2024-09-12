import { RouterModule, Routes } from '@angular/router';
import { ProductsListComponent } from './products/products-list/products-list.component';
import { CartComponent } from './cart/cart/cart.component';
import { NgModule } from '@angular/core';
import { CheckoutComponent } from './checkout/checkout/checkout.component';

export const routes: Routes = [
    {
        path: 'home',
        component: ProductsListComponent
    },
    {
        path: 'cart',
        component: CartComponent
    },
    {
      path: 'checkout',
      component: CheckoutComponent
  },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
