import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './product-card.html',
  styleUrls: ['./product-card.css']
})


export class ProductCard {

  @Input() product: any;

  //imgBorderStyle =  '1px solid black'
  productImageStyle = {
    border: '1px solid black',
    filter: 'sepia(0)'
  }

  formState = false;

  address = '';
  postalCode = 0;

  buyProduct(){
    console.log("Compraremos un producto");
    this.formState = true;
  }

  orderProduct(){
    console.log(`Direccion de usuario: ${this.address}`);
    console.log(`Codigo postal: ${this.postalCode}`)

  }

  addToCard(){
    console.log("Agregaremos un producto al carrito");
  }

  onMouseEnter(){
    console.log("Mouse enter");
    this.productImageStyle = {...this.productImageStyle, filter: 'sepia(0.3)'}

  }

  onMouseLeave(){
    console.log("Mouse leave");
    this.productImageStyle = {...this.productImageStyle, filter: 'sepia(0)'}

  }
  
}

