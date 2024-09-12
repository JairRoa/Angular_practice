// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common'; // Importa CommonModule

@NgModule({
  declarations: [
    AppComponent
    // Otros componentes
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule // Asegúrate de incluir CommonModule aquí si no usas componentes independientes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
